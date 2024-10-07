(() => {

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
        if (hasPromo && orderSummary) {
            clearInterval(orderSummaryID);
             const lastRow = [...orderSummary.querySelectorAll('.row')].at(-1)
             const shippingText = lastRow.querySelector('div:first-child > p');
             shippingText.textContent = 'Shipping';
             const firstLine = orderSummary.querySelector('.subtotal-item');
             const clonedFirstLine = firstLine.cloneNode(true);
             clonedFirstLine.classList.add('savings-line-PCR17');
             firstLine.after(clonedFirstLine)
             const savingsContainer = document.createElement('div')
             savingsContainer.classList.add('savings-container');
             clonedFirstLine.appendChild(savingsContainer)
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
       const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
       const promoElements = [...hasPromo.querySelectorAll('.discountPromotionMessage .promotion-information')];

    //    promoElements.forEach((e) => {
    //     savingsContainer.insertAdjacentElement('afterbegin', e)
    //    })

       const markup = 
       `
       ${promoElements.map((element) =>
           `
           <div class="savings-items">
               <p class="buy-more">${element.querySelector('.promotion-name').textContent}</p> 
               <p class="savings-price">${element.querySelector('.applied-promotion-discount').textContent}</p>
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

})()

