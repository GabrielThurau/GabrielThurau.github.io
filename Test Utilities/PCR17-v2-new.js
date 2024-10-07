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
             const clonedFirstLine = firstLine.cloneNode(true);
             clonedFirstLine.classList.add('savings-line-PCR17');
             firstLine.after(clonedFirstLine)
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

       // factor in promos to total savings

       const promoItems  = [...hasPromo.querySelectorAll('.discountPromotionMessage span.applied-promotion-discount')];
       const promos = promoItems.map((item) => Math.abs(+item.textContent.replace('$', '')))
        promoTotals = makeTotal(promos);
        console.log(promoTotals)
        savingsLine.querySelector('.sub-total').textContent = USD.format(promoTotals);
       

       savingsLine.querySelector('.order-receipt-label').textContent = 'Savings';

     }

})()

