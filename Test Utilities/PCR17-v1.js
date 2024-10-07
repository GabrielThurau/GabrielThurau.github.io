(() => {

    console.log('PCR17 - v1')

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

.PCR17-sub {
margin-left: 5px; 
color: #6A6A6A;
font-family: Helvetica Neue LT Std;
}

span[content], span[content] > span {
font-family: Helvetica Neue LT Std;
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
margin-top: 0rem;
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



.savings-badge, .savings-badge-sub {
background-color: #d71920;
color: #fff;
padding: 0.3rem 0rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px; 
font-size: 14px;
font-family: Helvetica Neue LT Std;
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


span.line-item-price-info {
display: none; 
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


span.line-item-price-info {
display: none;
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
    `);

    // injection of savings badge

    const cartConfig = {
        attributes: true,
        childList: true,
        subtree: true
    };
    const cartCallback = (mutationList) => {
        const allPrices = [...document.querySelectorAll('.unit-price > div.price')];
        const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
        for (const mutation of mutationList) {
           // console.log(mutation)
            if (mutation.type === 'attributes' && mutation.attributeName == "frequency" || 
                mutation.type ==='childList' && mutation.target.classList.contains('applied-promotion-discount')) {
                console.log(mutation)
                injectBadges(hasSale)
            }
    };

    }

    const cartObserver = new MutationObserver(cartCallback);
    cartObserver.observe(document.querySelector(".cart-page"), cartConfig);

    // MO for product card re-injection

    const cartID = setInterval(() => {
        const units = document.querySelectorAll('.unit-price')
        const allPrices = [...document.querySelectorAll('.unit-price > div.price')];
        const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
        units.length && clearInterval(cartID);


        // create and inject price badges

        // figure out subscription product issue

        injectBadges(hasSale);

        changePrices();

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
        console.log(hasFree)
        badge.textContent =  hasFree ? "FREE" : `$${Math.round(total * quantity)} OFF`;
        const fullPrice = salePrice * quantity;
        u.querySelector('.sales > span[content]').textContent = `${USD.format(fullPrice)}`
        u.querySelector('.list > span[content]').textContent = `${USD.format(listPrice * quantity)}`
        hasFree && u.querySelector('.sales').classList.replace('sales', 'list');
    }


    const getSavings = (savingsLine) => {

        // this only accounts for sales according to strikethrough prices on the left side. 
        // Not the subscribe and save option which populates on the right

        const allPrices = [...document.querySelectorAll('.unit-price > div.price')];
        const hasSale = allPrices.filter((span) => span.firstElementChild.classList.contains('salePriceClass'));
         
        // build up arrays and multiply by quantity in cart

        const salePrices = hasSale.map(
            (s) => +s.querySelector('span.sales > span[content]')
            .getAttribute("content") 
            * +s.closest('.line-item-each-price').nextElementSibling
            .querySelector('div.quantity-form > input')
            .value);
            
            const listPrices = hasSale.map((s) => +s.querySelector('span.list > span[content]')
             .getAttribute("content") 
             * +s.closest('.line-item-each-price').nextElementSibling
             .querySelector('div.quantity-form > input')
             .value);
     

         // reduce totals

        const saleTotal = makeTotal(salePrices);
        const listTotal = makeTotal(listPrices);
    
       const subStrikes = [...document.querySelectorAll('div.product-card-footer:has(og-offer[subscribed]) div.strike-through')]

       let subValues, subTotal;
       // subscription savings
       if (subStrikes.length) {
         subValues = subStrikes.map((s) => +s.textContent.replace('$', '') - +s.nextElementSibling.textContent.replace('$', ''));
         subTotal = makeTotal(subValues)
       }

       let savings = subStrikes.length ? (listTotal - saleTotal) + subTotal : (listTotal - saleTotal);

       savingsLine.querySelector('.sub-total').textContent = USD.format(savings);
       savingsLine.querySelector('.order-receipt-label').textContent = 'Savings';

     }

     const makeTotal = (prices) => {
        return prices.reduce(
            (acc, current) => acc + current,
            0
        );
     }


})()

