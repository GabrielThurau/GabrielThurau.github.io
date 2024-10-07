(() => {

        
        function addStyle(styleString) {
            const style = document.createElement('style');
            style.textContent = styleString;
            document.head.append(style);
        }
        addStyle(`
        .savings-items {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        }

        div[data-hide="hide-me"] {
        display: none;
        }

        div.savings-line-PCR17 .order-receipt-label:after {
        content: "+";
        font-size: 18px;
        margin-left: 2%;
        }

     div.savings-line-PCR17 .order-receipt-label.open:after {
        content: "-";
        font-size: 20px;
        margin-left: 2%;
        }

        div.savings-line-PCR17:has(.order-receipt-label.open) .savings-container {
        display: block;
        }

        div.savings-line-PCR17:has(.order-receipt-label) .savings-container {
        display: none;
        }

        .buy-more {
        max-width: 65%;
        font-size: 14px; 
        padding: 0rem 1.2rem;
        }

        .savings-line-PCR17 .order-receipt-label {
        cursor: pointer;
        }

        .savings-price {
        max-width: 35%;
        min-width: 75px;
        text-align: right;
        }

        div.savings-line-PCR17 .sub-total, .savings-price {
        color: #D71920;
        }


        `);
    
        // orderSummary injection
    
        const orderSummaryID = setInterval(() => {
            const orderSummary = document.querySelector('.order-summary')
            orderSummary && clearInterval(orderSummaryID);
    
            const lastRow = [...orderSummary.querySelectorAll('.row')].at(-1)
            const shippingText = lastRow.querySelector('div:first-child > p');
            shippingText.textContent = 'Shipping';
    
            // clone and inject savings line
            const firstLine = orderSummary.querySelector('.subtotal-item');
            const clonedFirstLine = firstLine.cloneNode(true);
            clonedFirstLine.classList.add('savings-line-PCR17');
            firstLine.after(clonedFirstLine)
            const savingsContainer = document.createElement('div')
            savingsContainer.classList.add('savings-container');
            clonedFirstLine.appendChild(savingsContainer)
            
            // do math to get savings totals
            getSavings(clonedFirstLine, savingsContainer);
    
        }, 100);
    
        let USD = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        
        const cartConfig = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const cartCallback = (mutationList) => {
            const savingsContainer = document.querySelector('.savings-container')
            const clonedFirstLine = document.querySelector('.savings-line-PCR17')
            for (const mutation of mutationList) {
               // console.log(mutation)
                if (mutation.type === 'attributes' && mutation.attributeName == "frequency" || 
                    mutation.type ==='childList' && mutation.target.classList.contains('applied-promotion-discount')) {
                    if (clonedFirstLine) {
                        getSavings(clonedFirstLine, savingsContainer)
                    }
                }
        };
    
        }
    
        const cartObserver = new MutationObserver(cartCallback);
        cartObserver.observe(document.querySelector(".cart-page"), cartConfig);
    
        const getSavings = (savingsLine, savingsContainer) => {

        const saleItems = [...document.querySelectorAll('.card.product-info:not(:has(.line-item-header-bonus)')];

        // this is still pulling in sale prices for subscription item

        // set window variable to determine if 

        //    const productJSON = saleItems.map((b) => JSON.parse(b.dataset.ga4SelectItem))
        //    const brands = productJSON.map(({ecommerce: {items}}) => items[0].brand);

        //const titles = document.querySelectorAll('.product-img-col .line-item-header .line-item-name > a');

           const brands = [];

           saleItems.forEach((t) => {
            brands.push(t.querySelector('.product-img-col .line-item-header .line-item-name > a').textContent.split(' ')[0])
        })

            let allPrices = []; 

            saleItems.forEach((si) => {
             allPrices.push(si.querySelector('.price'))
         })
    
            // this only accounts for sales according to strikethrough prices on the left side. 
            // Not the subscribe and save option which populates on the right

            const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
            const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through')]
             
            // build up arrays and multiply by quantity in cart
    
            const salePrices = hasSale.map(
            (s) => +s.querySelector('span.sales > span[content]')
            .getAttribute("content") 
            * +s.closest('.line-item-each-price').nextElementSibling
            .querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10);

            const listPrices = hasSale.map((s) => +s.querySelector('span.list > span[content]')
             .getAttribute("content") 
             * +s.closest('.line-item-each-price').nextElementSibling
             .querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10);


             const differences = listPrices.map((item, index) => {
                return item - salePrices[index];
             })

             const zip = (a, b) => a.map((k, i) => [k, b[i]]);

             const zipped = zip(brands, differences);
            
            
            const zippedDiscounts = Object.fromEntries(zipped);


            const markup = 
            `
            ${Object.entries(zippedDiscounts).map(([b, p]) =>
                
                `
                <div data-hide=${isNaN(p) ? "hide-me" : "show"} class="savings-items">
                    <p class="buy-more">Buy More, Save More on ${b} Products</p> 
                    <p class="savings-price">${USD.format(p)}</p>
                 </div>`)
              .join('')}
      `
       savingsContainer.innerHTML = markup; 
    
             // reduce totals
             const saleTotal = makeTotal(salePrices);
             const listTotal = makeTotal(listPrices);
            
        
           let subValues, subTotal;
           // subscription savings
           if (subStrikes.length) {
            const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through')]
             subValues = subStrikes.map((s) => +s.textContent.replace('$', '') - +s.nextElementSibling.textContent.replace('$', ''));
             //console.log(subValues)
             subTotal = makeTotal(subValues);
           }

           const savings = subStrikes.length ? (listTotal - saleTotal) + subTotal : (listTotal - saleTotal);

           const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
       
           let promoTotals;

           
       if (hasPromo) {
        const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
        const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
         promoTotals = makeTotal(promos);
         //console.log(promoTotals)
         const promoContainer = document.createElement('div');
         promoContainer.classList.add('savings-items', 'promo-savings');
         promoContainer.innerHTML = 

         `
         <p class="buy-more">Free Product & Coupon Savings</p> 
         <p class="savings-price">${USD.format(promoTotals)}</p>
        `

         savingsContainer.insertAdjacentElement('beforeend', promoContainer)
    
       }

       if (hasPromo) {
        savingsLine.querySelector('.sub-total').textContent = USD.format(savings + promoTotals);
       }

       else {
        savingsLine.querySelector('.sub-total').textContent = USD.format(savings);
       }

       savingsLine.querySelector('.order-receipt-label').textContent = 'Savings';
       savingsLine.querySelector('.order-receipt-label').addEventListener('click', toggleDropdown);
   
           if (subValues?.length) {
            console.log('thing happened')
    const lastSavingsItem = document.querySelector("div.savings-container > div.savings-items:last-child");
            const clonedLastSavings = lastSavingsItem.cloneNode(true);
            clonedLastSavings.classList.add('subscription-savings')
            clonedLastSavings.innerHTML =  
            `
             <p class="buy-more">Saved by Subscribing!</p> 
             <p class="savings-price">${USD.format(makeTotal(subValues))}</p>
            `
            savingsContainer.insertAdjacentElement('beforeend', clonedLastSavings)
           }
         }
    
         const makeTotal = (prices) => {
            return prices.reduce(
                (acc, current) => acc + current,
                0
            );
         }

         const toggleDropdown = e => {
           e.target.classList.toggle('open')
         }
    
    })()