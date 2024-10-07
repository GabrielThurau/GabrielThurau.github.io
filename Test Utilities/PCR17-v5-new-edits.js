(() => {
  
    // tracking
      
      const savingsTracking = (e) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: 'MonetateEvent',
        'ga4-event-name': 'PCR17_TotalSavings',
        'ga4-event-p1-name': 'event_label',
        'ga4-event-p1-value': e.target.textContent,
       });
      };
      
     
         const trackingID = setInterval(() => {
            let savingsLine = document.querySelector('.savings-line-PCR17 .order-receipt-label');
            if (savingsLine) {
                clearInterval(trackingID);
         savingsLine.addEventListener('click', savingsTracking);
               }
        }, 100);
      
      
    })();
    
    
    
    
    (() => {
    
        console.log('PCR17 - v4')
    
        function addStyle(styleString) {
            const style = document.createElement('style');
            style.textContent = styleString;
            document.head.append(style);
        }
        addStyle(`
        /* smaller mobile devices  */
    
    .cart-page .product-card-footer .line-item-price-qty-wrap {
    flex-direction: row-reverse !important;
    }
    
    .cart-page div.quantity-form {
    width: 5.93rem;
    }
    
    .cart-page label.quantity-label {
    font-size: 1rem;
    
    }
    
    .PCR17-sub {
    margin-left: 5px; 
    color: #6A6A6A;
    font-family: Helvetica Neue LT Std;
    }
    
    span[content], span[content] > span {
    font-family: "Helvetica Neue LT W05 55 Roman";
    }
    
    .cart-page .line-item-price-qty-wrap .line-item-each-price span.list {
    font-size: 0.9rem;
    line-height: 20px; 
    color: #6A6A6A !important;
    font-weight: 700; 
    }
    
    
    .cart-page .line-item-price-qty-wrap .strike-through, .cart-page .line-item-price-qty-wrap del {
    font-size: 0.85rem;
    }
    
    .hide {
    display: none !important;
    }
    
    .cart-page .quantity-label, .line-item-price-info {
     margin-bottom: 0.6rem;
    }
    
    .cart-page .line-item-price-qty-wrap .line-item-each-price div.unit-price {
    margin-top: 0.3rem;
    }
    
    .cart-page .line-item-price-qty-wrap .price-free {
    background-color: #d71920;
    color: #fff;
    padding: 0.3rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px; 
    font-size: 12px;
    position: relative;
    width: fit-content;
    padding-inline: 0.6rem;
    margin-left: auto;
    margin-top: 0.5rem;
    }
    
    [location="cart"] .og-subscription-header {
    margin-top: 1rem;
    }
    
    
    .savings-badge, .savings-badge-sub {
    background-color: #d71920;
    color: #fff;
    padding: 0.3rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px; 
    font-size: 14px;
    font-family: "Helvetica Neue LT W05 55 Roman";
    position: relative;
    width: fit-content;
    padding-inline: 0.6rem;
    margin-left: auto;
    margin-top: 0.5rem;
    }
    
    .cart-page .line-item-price-qty-wrap .line-item-each-price {
    margin-right: auto; 
    }
    
    .line-item-each-price {
    text-align: right;
    max-width: none !important;
    }
    
    .cart-page div.line-item-price-qty-wrap .price>span.salePriceClass {
    flex-flow: row !important;
    align-items: center;
    gap: 0.6rem;
    justify-content: flex-end;
    }
    
    span.list + span.list {
    display: none;
    }
    
    @media (max-width: 391px) {
    
    .line-item-total-price {
    display: none; 
      }
    
    .cart-page .product-card-footer .line-item-price-qty-wrap {
    gap: 1rem;
    }
    
    
    div.line-item-total-price {
    text-align: left !important;
    }
    
    .cart-page .line-item-price-qty-wrap .line-item-total-price div.price {
    margin-top: 0rem;
    }
    
    .cart-page div.prod-img-remove {
    padding-left: 0.6rem;
    }
    
    .cart-page .line-item-price-qty-wrap div.line-item-total-price {
    margin-right: auto;
    }
    
    .quantity-field.quantity-form {
    padding: 0.3rem 1rem;
    }
    
    .cart-page .line-item-price-qty-wrap div.line-item-quantity {
    margin-left: auto;
    }
    
    .cart-page .line-item-price-qty-wrap span.line-item-price-info {
    font-family: "Helvetica Neue LT W05 55 Roman";
    color: #000;
    font-size: 1rem;
    }
    
    
    }
    
    /* Larger mobile devices */
    
    .cart-page .line-item-price-qty-wrap .line-item-quantity {
    margin-left: 5.5rem;
    }
    
    
    .line-item-total-price {
    display: none; 
    }
    
    .cart-page .line-item-price-qty-wrap div.line-item-total-price {
    margin-right: auto;
    }
    
    
    div.line-item-total-price {
    text-align: left !important;
    }
    
    .cart-page .line-item-price-qty-wrap span.line-item-price-info {
    font-family: "Helvetica Neue LT W05 55 Roman";
    color: #000;
    font-size: 1rem;
    }
    
    .quantity-field.quantity-form {
    padding: 0.3rem 1rem;
    }
    
    .cart-page div.prod-img-remove {
    padding-left: 0.6rem;
    }
    
    .cart-page .line-item-price-qty-wrap .line-item-total-price div.price {
    margin-top: 0rem;
    }
    
    /* Tablet styles */
    
    @media (min-width: 768px) {
    .cart-page .line-item-price-qty-wrap div.line-item-quantity {
    margin-left: 5.9rem;
    
    }
    }
    
    /* small laptop and up */
    
    @media (min-width: 1100px) {
    div.cart-page .line-item-price-qty-wrap div.line-item-quantity {
    margin-left: 1rem;
    }
      }
    
    @media (min-width: 1400px) {
    .cart-page .line-item-price-qty-wrap div.line-item-each-price {
    margin-right: 0;
    }
    
    }
    
      div.savings-line-PCR17 .sub-total, .savings-price {
            color: #D71920;
            }
    
        
                .savings-items {
            display: flex;
            justify-content: space-between;
            padding-left: 1rem;
            }
    
    div.order-discounts-promo {
    
    display: none;
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

            
            .savings-line-PCR17 .order-receipt-label {
            cursor: pointer;
            text-decoration: underline;
            }

                .savings-line-PCR17 .order-receipt-label.open {
            cursor: pointer;
            text-decoration: none;
            }
            
            .buy-more {
            max-width: 65%;
            font-size: 14px; 
            padding-left: 0.3rem;
            }
    
            .savings-line-PCR17 .order-receipt-label {
            cursor: pointer;
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
    

                .savings-items {
            display: flex;
            justify-content: space-between;
            padding-left: 1rem;
            }
    
    div.order-discounts-promo {
    
    display: none;
    }
    
            div[data-hide="hide-me"] {
            display: none;
            }
    
            div.savings-line-PCR17 .order-receipt-label:after {
            content: "+";
            font-size: 18px;
            margin-left: 2%;
            }
    
       .savings-line-PCR17 .order-receipt-label {
    max-width: 6.5rem;
    padding-bottom: 1px;
        }
    
    @media (min-width: 1024px) {
       .savings-line-PCR17 p.order-receipt-label {
    min-width: 6.5rem;
    max-width: none; 
       }
    
    }
    
    
         div.savings-line-PCR17 .order-receipt-label.open:after {
            content: "-";
            font-size: 20px;
            margin-left: 4%;
            }
    
            div.savings-line-PCR17:has(.order-receipt-label.open) .savings-container {
            display: block;
            width: 100%;
            }
    
             div.savings-line-PCR17:has(.order-receipt-label.open) .order-receipt-label.open {
            border-bottom: none; 
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
    
        // injection of savings badge
    
        const cartConfig = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const cartCallback = (mutationList) => {
            const savingsContainer = document.querySelector('.savings-container');
            const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
            const clonedFirstLine = document.querySelector('.savings-line-PCR17')
            const allPrices = [...document.querySelectorAll('.unit-price > div.price')];
            const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
            for (const mutation of mutationList) {
               // console.log(mutation)
                if (mutation.type === 'attributes' && mutation.attributeName == "frequency" || 
                    mutation.type ==='childList' && mutation.target.classList.contains('applied-promotion-discount')) {
                   // console.log(mutation)
                    if (clonedFirstLine) {
                        getSavings(clonedFirstLine, hasPromo, savingsContainer)
                    }
                    injectBadges(hasSale)
                   changePrices();
                }
        };
        }
    
        const cartObserver = new MutationObserver(cartCallback);
        cartObserver.observe(document.querySelector(".cart-page"), cartConfig);
    
        // MO for product card re-injection
      
         const toggleDropdown = e => {
            e.target.classList.toggle('open');
          }
    
        const cartID = setInterval(() => {
            const units = document.querySelectorAll('.unit-price')
            const allPrices = [...document.querySelectorAll('.unit-price > div.price')];
            const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
            const hasPromo = document.querySelector('.coupons-and-promos:has(div.promotion-information)');
            const orderSummary = document.querySelector('.order-summary')
            const saleItems = [...document.querySelectorAll('.card.product-info:has(.formatted-price) .formatted-price')];
            if (units.length && hasPromo && orderSummary) {
                clearInterval(cartID);
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
                clonedSecondLine.querySelector('.order-receipt-label').textContent = "Additional Savings";
                clonedSecondLine.classList.add('additional-savings')
                saleItems.length && firstLine.after(clonedSecondLine);
                const savingsContainer = document.createElement('div');
                savingsContainer.classList.add('savings-container');
                clonedFirstLine.appendChild(savingsContainer);

                getSavings(clonedFirstLine, hasPromo, savingsContainer);
                injectBadges(hasSale);
                changePrices();
            }
    
            // create and inject price badges
    
            // figure out subscription product issue
    
         
        }, 100);
    
        let USD = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    
        const changePrices = () => {
            const notSale = document.querySelectorAll('.unit-price:not(:has(.badge))')
            notSale.forEach((ns) => {
            const price =  +ns.querySelector('span[content]').getAttribute('content');
            const quantity = +ns.closest('.line-item-each-price').nextElementSibling.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10
            if (!isNaN(price)) {
            const total = price * quantity;
            ns.querySelector('span[content] > span').textContent = `${USD.format(total)}`;
            }
            })
        }
    
    
        const injectBadges = (hasSale) => {
            const totalTexts = document.querySelectorAll('.line-item-price-info')
            totalTexts.forEach((t) => {
                t.textContent = "Total";
            })
    
            // need to also account for subscription savings...
    
            const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through')]
    
            const hasSubscription = document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed])');
    
            hasSubscription.forEach((hs) => {
                const spanToClone = hs.querySelector('.unit-price span[content] > span');
                const clonedSpan = spanToClone.cloneNode(true);
                if (!hs.querySelector('.PCR17-sub')) {
                  spanToClone.after(clonedSpan)
                  clonedSpan.classList.add('list', 'PCR17-sub')
                 const price = +hs.querySelector('span[content]').getAttribute('content');
                const quantity = +hs.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
                if (!isNaN(price)) {
               const total = price * quantity;
               hs.querySelector('span[content] > span').textContent = `${USD.format(total)}`;
               }
                const difference = +hs.querySelector('.unit-price span[content] > span').textContent.replace('$', '') - +hs.querySelector('.line-item-total-price .line-item-total-price-amount').textContent.replace('$', '');
                  clonedSpan.textContent = hs.querySelector('.line-item-total-price .line-item-total-price-amount').textContent;
                  const badge = document.createElement('div');
                  badge.classList.add('savings-badge-sub', 'badge');
                  badge.textContent = `${USD.format(difference)} OFF`;
                  clonedSpan.parentElement.after(badge)
                }
               // console.log(spanToClone)
            })
    
              !document.querySelector('.savings-badge') && hasSale.forEach((u, i) => {
                const badge = document.createElement('div');
                badge.classList.add('savings-badge', 'badge')
                u.after(badge);
                badgeMath(u, badge)
            })
        }
    
        const badgeMath = (u, badge) => {
            const hasFree = u.closest('.product-card-footer:has(div.line-item-header-bonus)')
            document.querySelector('.product-card-footer:has(span[data-promotion])');
            const listPrice = +u.querySelector('.list > span[content]').getAttribute("content");
            const salePrice =  +u.querySelector('.sales > span[content]').getAttribute("content");
            const total = listPrice - salePrice;
            const quantity =  +u.closest('.line-item-each-price').nextElementSibling.querySelector('div.quantity-form > select').dataset.preSelectQty / 10 * 10;
           // console.log(hasFree)
            badge.textContent =  hasFree ? "FREE" : `$${Math.round(total * quantity)} OFF`;
            const fullPrice = salePrice * quantity;
            u.querySelector('.sales > span[content]').textContent = `${USD.format(fullPrice)}`
            u.querySelector('.list > span[content]').textContent = `${USD.format(listPrice * quantity)}`
            hasFree && u.querySelector('.sales').classList.replace('sales', 'list');
        }
    
    
        const getSavings = (savingsLine, hasPromo, savingsContainer) => {



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

    
            // factor in promos to total savings

            if (hasPromo) {

            const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
            const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
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
    
    
             promoTotals = makeTotal(promos);
             savingsLine.querySelector('.order-receipt-label').addEventListener('click', toggleDropdown);
             savingsLine.querySelector('.sub-total').textContent = USD.format(promoTotals);
    
    
            
     
            savingsLine.querySelector('.order-receipt-label').textContent = 'Promo Savings';
        }
          }
    
         const makeTotal = (prices) => {
            return prices.reduce(
                (acc, current) => acc + current,
                0
            );
         }
    
    
    })()
    