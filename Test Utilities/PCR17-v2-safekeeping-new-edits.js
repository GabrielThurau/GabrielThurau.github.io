(() => {


    // "Subtotal" should be updated to "Original Price" on V2, V3, V4 & V5
    
    // The number in the "original price" field should be the total of the striked out prices; 
    //then, we should add an "additional savings" line item
    // to account for all non-promotional savings being offered (i.e. the total of the red badges)
    
    // Update the Savings prices to display the number as "negative" (ex: "-$300" vs. "$300")
    
    // Right Justify the "total savings" accordion numbers
      
    
        console.log('PCR17 - v2');
        
            const zip = (a, b) => a.map((k, i) => [k, b[i]]);
        
            function addStyle(styleString) {
                const style = document.createElement('style');
                style.textContent = styleString;
                document.head.append(style);
            }
            addStyle(`
            
                div.savings-line-PCR17 .sub-total, .savings-price, .additional-savings .sub-total {
                color: #D71920;
                font-family: "Helvetica Neue LT W05 55 Roman";
                }
        
        div.order-discounts-promo {
        
        display: none;
        }
        
            `);
        
            // orderSummary injection
        
            const makeTotal = (prices) => {
                return prices.reduce(
                    (acc, current) => acc + current,
                    0
                );
             }
        
            const orderSummaryID = setInterval(() => {
                let promoTotals;
                const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
                const orderSummary = document.querySelector('.order-summary')
                if (hasPromo && orderSummary) {
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
                     firstLine.after(clonedFirstLine)
                     clonedSecondLine.querySelector('.order-receipt-label').textContent = "Additional Savings";
                     clonedSecondLine.classList.add('additional-savings')
                     firstLine.after(clonedSecondLine);
                     // do math to get savings totals
                     getSavings(clonedFirstLine, hasPromo);
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
            
            const getSavings = (savingsLine, hasPromo) => {
                // this gets all of the products that are on sale. Best I got for now.
                const saleItems = [...document.querySelectorAll('.card.product-info:has(.formatted-price) .formatted-price')];

              salesPrices = saleItems.map((p) => {
                let card = p.closest('div.product-info');
                // let quantity = card.querySelector('div.quantity-form > select');
                let price = +card.querySelector('span.list > span[content]')
               .getAttribute("content") 
               let quantity = +card.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
                return (price * quantity);
                   //console.log(p.textContent)
               })

                listPrices = saleItems.map((p) => {
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

                const grandTotal = salesTotals - listTotals; 

                console.log(grandTotal);
                
                let originalElement = document.querySelector('.subtotal-PCR17 .sub-total');
                const additionalElement = document.querySelector('.additional-savings .sub-total');

                let originalPrice = document.querySelector('.subtotal-PCR17 .sub-total')
                .textContent
                .replace('$', '')
                .replace(',', '');

                originalPrice = Math.abs(+originalPrice)

                const originalPrices = [grandTotal, originalPrice];

                console.log(originalPrices)

                const newOriginal = makeTotal(originalPrices)
                //const additionalSavings = makeTotal(strikeThroughPrices);
                
                originalElement.textContent = USD.format(newOriginal);
                additionalElement.textContent = USD.format(grandTotal);

               // factor in promos to total savings
                  const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage .promotion-information:not(.hide-cartprice-promomsg) span.applied-promotion-discount')];
              console.log(promoItems)
               const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
                promoTotals = makeTotal(promos);
               // console.log(promoTotals)
                savingsLine.querySelector('.sub-total').textContent = USD.format(promoTotals);
            
               savingsLine.querySelector('.order-receipt-label').textContent = 'Promo Savings';
        
             }
    
        })()
        
        