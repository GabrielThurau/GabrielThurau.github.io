(() => {



    // "Subtotal" should be updated to "Original Price" on V2, V3, V4 & V5
   
   // The number in the "original price" field should be the total of the striked out prices; 
   //then, we should add an "additional savings" line item
   // to account for all non-promotional savings being offered (i.e. the total of the red badges)
   
   // Update the Savings prices to display the number as "negative" (ex: "-$300" vs. "$300")
   
   // Right Justify the "total savings" accordion numbers

   const zip = (a, b) => a.map((k, i) => [k, b[i]]);

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
         display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-right: 7.5px;
        text-decoration: none; 
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
       text-decoration: underline;
       }

        .savings-line-PCR17 .order-receipt-label.open {
       cursor: pointer;
       text-decoration: none;
       }

       .savings-price {
       max-width: 35%;
       min-width: 75px;
       text-align: right;
       }

       div.savings-line-PCR17 .sub-total, .savings-price, .additional-savings .sub-total {
       color: #D71920;
       font-family: "Helvetica Neue LT W05 55 Roman";
       }

       div.order-discounts-promo {
       display: none; 
       }

       @media (min-width: 1024px) {
        div.savings-line-PCR17:has(.order-receipt-label.open) div.savings-container {
         display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-right: 15px;
       }
       }

        @media (min-width: 1600px) {
        div.savings-line-PCR17:has(.order-receipt-label.open) div.savings-container {
         display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-right: 20px;
       }
       }

   `);

   // orderSummary injection

   const makeTotal = (prices) => {
       return prices.reduce(
           (acc, current) => acc + current,
           0
       );
    }

    const toggleDropdown = e => {
       e.target.classList.toggle('open')
     }

   const orderSummaryID = setInterval(() => {
       let promoTotals;
       const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
       const orderSummary = document.querySelector('.order-summary')
       if (orderSummary) {
           clearInterval(orderSummaryID);
            const lastRow = [...orderSummary.querySelectorAll('.row')].at(-1)
            const shippingText = lastRow.querySelector('div:first-child > p');
            shippingText.textContent = 'Shipping';
            const firstLine = orderSummary.querySelector('.subtotal-item');
            const clonedSecondLine = firstLine.cloneNode(true)
            const clonedFirstLine = firstLine.cloneNode(true);
            firstLine.querySelector('.order-receipt-label').textContent = "Original Price";
            firstLine.classList.add('subtotal-PCR17');
            clonedFirstLine.classList.add('savings-line-PCR17');
            hasPromo && firstLine.after(clonedFirstLine);
            const savingsContainer = document.createElement('div')
            savingsContainer.classList.add('savings-container');
            clonedFirstLine.appendChild(savingsContainer)
            clonedSecondLine.querySelector('.order-receipt-label').textContent = "Additional Savings";
            clonedSecondLine.classList.add('additional-savings')
            firstLine.after(clonedSecondLine);
            // do math to get savings totals
            getSavings(clonedFirstLine, hasPromo, savingsContainer);
          }
   }, 100);


   const cartConfig = {
       attributes: true,
       childList: true,
       subtree: true
   };
   const cartCallback = (mutationList) => {
       const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
       const clonedFirstLine = document.querySelector('.savings-line-PCR17')
       for (const mutation of mutationList) {
          // console.log(mutation)
           if (mutation.type === 'attributes' && mutation.attributeName == "frequency" || 
               mutation.type ==='childList' && mutation.target.classList.contains('applied-promotion-discount')) {
               if (clonedFirstLine) {
                   getSavings(clonedFirstLine, hasPromo)
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
   

   const getSavings = (savingsLine, hasPromo, savingsContainer) => {

      // factor in promos to total savings



      const saleItems = [...document.querySelectorAll('.card.product-info:has(.formatted-price) .formatted-price')];
      const notOnSale = [...document.querySelectorAll('.card.product-info:not(:has(.formatted-price)) .line-item-total-price-amount')];


       const salesPrices = saleItems.map((p) => {
        let card = p.closest('div.product-info');
        // let quantity = card.querySelector('div.quantity-form > select');
        let price = +card.querySelector('span.list > span[content]')
       .getAttribute("content") 
       let quantity = +card.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
        return (price * quantity);
           //console.log(p.textContent)
       })

       const listPrices = saleItems.map((p) => {
        let card = p.closest('div.product-info');
        // let quantity = card.querySelector('div.quantity-form > select');
        let price = +card.querySelector('span.sales > span[content]')
       .getAttribute("content") 
       let quantity = +card.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
        return (price * quantity);
           //console.log(p.textContent)
       })


        const notSalePrices = notOnSale.map((p) => {
        let card = p.closest('div.product-info');
        // let quantity = card.querySelector('div.quantity-form > select');
        let price = +card.querySelector('span.sales > span[content]')
       .getAttribute("content") 
       let quantity = +card.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
        return (price * quantity);
           //console.log(p.textContent)
       })


       const salesTotals = makeTotal(salesPrices)
       const listTotals = makeTotal(listPrices)
       const notSaleTotals = makeTotal(notSalePrices);


       let originalElement = document.querySelector('.subtotal-PCR17 .sub-total');
       const additionalElement = document.querySelector('.additional-savings .sub-total');

       const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through:not(.non-adjusted-price)')]

       let subValues, subTotal, subPrices, originalPrices;
       // subscription savings
       if (subStrikes.length) {
           subValues = subStrikes.map((s) => +s.textContent.replace('$', '') - +s.nextElementSibling.textContent.replace('$', ''));
           subTotal = makeTotal(subValues);
            originalPrices = [salesTotals, subTotal]
            if (notOnSale.length) {
                originalPrices = [salesTotals, notSaleTotals, subTotal]
            }
          // console.log(subTotal)
       }

        else {
           originalPrices = [salesTotals];
            if (notOnSale.length) {
                  originalPrices = [salesTotals, notSaleTotals];
            }
       }

       let grandTotal = subStrikes.length ? (salesTotals - listTotals) + subTotal : (salesTotals - listTotals);

       const newOriginal = makeTotal(originalPrices)
       //const additionalSavings = makeTotal(strikeThroughPrices);
       originalElement.textContent = USD.format(newOriginal);

       additionalElement.textContent = USD.format(grandTotal);

    if (hasPromo) {
        const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
        const promoElements = [...hasPromo.querySelectorAll('.discountPromotionMessage .promotion-information')];
  
  
        const markup = 
        `
        ${promoElements.map((element) =>
            `
            <div class="savings-items">
                <p class="buy-more">${element.querySelector('.promotion-name').textContent.length > 0 
                ? element.querySelector('.promotion-name').textContent 
                :
                "Additional Promo"}</p> 
                <p class="savings-price">${element.querySelector('.applied-promotion-discount').textContent.replace('-', '')}</p>
             </div>`)
          .join('')}
  `
   savingsContainer.innerHTML = markup; 
  
        savingsLine.querySelector('.order-receipt-label').addEventListener('click', toggleDropdown);
  
        const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
         promoTotals = makeTotal(promos);
  
        if (hasPromo) {
         savingsLine.querySelector('.sub-total').textContent = USD.format(promoTotals);
        }
  
        savingsLine.querySelector('.order-receipt-label').textContent = 'Savings';
  
      }
    }

})()

