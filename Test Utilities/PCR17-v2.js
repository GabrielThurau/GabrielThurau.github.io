(() => {

    const zip = (a, b) => a.map((k, i) => [k, b[i]]);

    function addStyle(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }
    addStyle(`
    
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
        
        // do math to get savings totals
        getSavings(clonedFirstLine);

    }, 100);


    const cartConfig = {
        attributes: true,
        childList: true,
        subtree: true
    };
    const cartCallback = (mutationList) => {
        const clonedFirstLine = document.querySelector('.savings-line-PCR17')
        for (const mutation of mutationList) {
           // console.log(mutation)
            if (mutation.type === 'attributes' && mutation.attributeName == "frequency" || 
                mutation.type ==='childList' && mutation.target.classList.contains('applied-promotion-discount')) {
                if (clonedFirstLine) {
                    getSavings(clonedFirstLine)
                }
            }
    };

    }

    const cartObserver = new MutationObserver(cartCallback);
    cartObserver.observe(document.querySelector(".cart-page"), cartConfig);

    let USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    

    const getSavings = (savingsLine) => {

        console.log('get savings called')
        // this only accounts for sales according to strikethrough prices on the left side. 
        // Not the subscribe and save option which populates on the right

        // needed to narrow this selector down to not include savings when it's a free gift

        const saleItems = document.querySelectorAll('.card.product-info:not(:has(.line-item-header-bonus)');

        let allPrices = [];

           saleItems.forEach((si) => {
            allPrices.push(si.querySelector('.price'))
        })

        // needed to narrow this selector down to not include savings when it's a free gift

        const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
         
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
         
         // reduce totals
         const saleTotal = makeTotal(salePrices);
         const listTotal = makeTotal(listPrices);
        
    
       const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through')]

       let subValues, subTotal;
       // subscription savings
       if (subStrikes.length) {
         subValues = subStrikes.map((s) => +s.textContent.replace('$', '') - +s.nextElementSibling.textContent.replace('$', ''));
         subTotal = makeTotal(subValues);
       }

       // factor in promos to total savings

       let savings = subStrikes.length ? (listTotal - saleTotal) + subTotal : (listTotal - saleTotal);

       const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');

       let promoTotals;


       if (hasPromo) {
        const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
        const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
         promoTotals = makeTotal(promos);
         //console.log(promoTotals)
       }
       
       if (hasPromo) {
        savingsLine.querySelector('.sub-total').textContent = USD.format(savings + promoTotals);
       }

       else {
        savingsLine.querySelector('.sub-total').textContent = USD.format(savings);
       }

       savingsLine.querySelector('.order-receipt-label').textContent = 'Savings';

     }

     const makeTotal = (prices) => {
        return prices.reduce(
            (acc, current) => acc + current,
            0
        );
     }


})()

