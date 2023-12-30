(function() {
    let stylesgf7 = document.createElement('style');
    stylesgf7.innerHTML = `
    
         .limited {
       background: rgba(200, 40, 41, 0.2);
       padding: 0.2rem 0rem;
       align-items: center;
       border-left: 4px solid #c82829;
       text-align: center;
       justify-content: center;
       font-weight: bold !important; 
       font-size: 0.9rem;
       margin: 0.3rem 0rem;
       margin-bottom: 0.3rem;
       width: 90%;
      }
    
    
    @media (max-width:767px){
  .item-content .info-div .cart-item-sku.mtn {
      display: none;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand:after {
      content: "";
      width: 18px;
      position: absolute;
      left: 0;
      height: 100%;
      background-color: #fff;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand {
      position: relative;
      margin-left: -18px;
      background: #fff;
  }

  .cart-wrapper .info-div {
      overflow: hidden;
  }

  .item-content .info-div .cart-item-size {
      display: none;
  }

  .item-content .info-div .stock-msg {
      display: none;
  }
  .price-section .before-price {
      font-size: 0;
      letter-spacing: 0 !important;
  }

  .price-section .before-price bdo {
      font-size: 16px;
      letter-spacing: 0;
    color: #000;
  }
  .price-section .after-price {
      font-size: 0;
  }
  .price-section .after-price bdo {
      font-size: 16px;
    color: #000;
  }

  .qty-change-wrapper a {
      font-size: 12px;
      color: grey;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(3)>div.grey-label~.cart-qty-normal-dd {
      width: 100%;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(3)>div.grey-label~.cart-qty-normal-dd .qty-change-wrapper {
      float: right;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(3)>div.grey-label~.cart-qty-normal-dd .cart-qty-select {
      height: 35px;
      padding: 5px 15px;
  }
  .cart-product .item-img {
      width: 30%;
  }
  .cart-product .item-content {
      width: 70%;
  }
  .price-section {
      position: relative;
      padding-right: 55px;
        display: table;
      width: auto;
  }
  body:has(.discount-section) .price-section:after{
      content: "15% Off";
      text-transform: uppercase;
      background-color: #ffc800;
      font-size: 12px;
      padding: 2px 5px;
      position: absolute;
      white-space: nowrap;
      right: -10px;
      top: 1px;
      border-radius: 2px;
  }
  body:has(.discount-section) .after-price {
      display: block !important;
  }
  body .after-price {
      display: none;
  }
  body:has(.discount-section) .price-section .before-price bdo {
      color: grey;
      text-decoration: line-through;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand {
  padding-bottom: 6px;
  }
  }

  @media (min-width:768px){
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand:after {
      content: "";
      width: 18px;
      position: absolute;
      left: 0;
      height: 100%;
      background-color: #fff;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand {
      position: relative;
      margin-left: -18px;
      background: #fff;
      
  
  }

  .cart-wrapper .info-div {
      overflow: hidden;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-name a {
      color: #000 !important;
  }
    .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand {
      padding-bottom: 0 !important;
      text-align: left;
  }

  .c5-5-of-12.price-wrapper-header {
      display: none;
  }

  .c5-3-of-12.qty-container-header {
      display: none;
  }

  .c5-4-of-12.total-wrapper-header {
      display: none;
  }

  .c2-12-of-12.c5-5-of-12.column-wrapper.mq2show.price-wrapper {
      display: none;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-sku {
      display: none;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-size {
      display: none;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .stock-msg {
      display: none;
  }

  .c0-7-of-12.c-8-of-12.c3-9-of-12.c5-10-of-12.item-content {flex-flow: column;display: flex;max-width: 300px;}

  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-quantity-remove {
      position: absolute;
      bottom: 20px;
      right: 0;
      z-index: 9;
      color: #808080;
      font-size: 12px;
  }

  .cart-wrapper #CartTableAsyncSection .info-div {
      position: static;
  }

  .cart-wrapper #CartTableAsyncSection .price-div {
      display: flex;
      flex-flow: column-reverse;
      width: 100%;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(3)>div.grey-label~.cart-qty-normal-dd {
      margin: 0;
  }

  body:has(.discount-section) .price-section:after{
      content: "15% Off";
      text-transform: uppercase;
      background-color: #ffc800;
      font-size: 12px;
      padding: 2px 5px;
      position: absolute;
      white-space: nowrap;
      right: -10px;
      top: 1px;
      border-radius: 2px;
  }
  body:has(.discount-section) .after-price {
      display: block !important;
  }
  body .after-price {
      display: none;
  }
  body:has(.discount-section) .price-section .before-price bdo {
      color: grey;
      text-decoration: line-through;
  }
  .price-section .after-price {
      font-size: 0;
  }
  .price-section .after-price bdo {
      font-size: 16px;
    color: #000;
  }
  .price-section .before-price {
      font-size: 0;
      letter-spacing: 0 !important;
  }

  .price-section .before-price bdo {
      font-size: 16px;
      letter-spacing: 0;
    color: #000;
  }
  .qty-change-wrapper a {
      font-size: 12px;
      color: grey;
  }
  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(4)>div.price-section>div.before-price {
      display: inline-block !important;
      width: auto !important;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(4)>div.price-section>div.after-price {
      width: auto !important;
  }

  .cart-wrapper #CartTableAsyncSection .info-div {
      width: 100%;
  }

  .cart-wrapper #CartTableAsyncSection .price-wrapper {
      width: 100% !important;
  }

  .cart-wrapper #CartTableAsyncSection .qty-container, .cart-wrapper #CartTableAsyncSection .qty-container-header {
      width: 100% !important;
      padding: 0;
      margin-top: 5px;
  }

  .cart-wrapper #CartTableAsyncSection .total-wrapper {
      width: 100% !important;
  }

  .price-section {
      width: auto;
      padding-right: 55px;
  }

  .cart-item-wrapper.nonmessage>div.item-content>div:nth-child(2)>div:nth-child(3)>div.grey-label~.cart-qty-normal-dd .cart-qty-select {
  }

          .limited {
       margin-bottom: 0rem;
       margin-top: 1.5rem;
       width: 75%;
      }
  }`;


    let domCheck;
    const doDomCheck = function() {
        let cartItemBrands = document.querySelectorAll('.cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand');
        let siteLogo = document.querySelector("#header div.logo-container > a > img");
        let cartItems = document.querySelector('#CartQuantityAsyncForm');
        if (cartItems && (siteLogo && siteLogo.src.search('wholesale') === -1)) {
            document.head.appendChild(stylesgf7);
            clearInterval(domCheck);
            cartItems.setAttribute('style', 'display:block;');
        }
        if (cartItems && (siteLogo && siteLogo.src.search('wholesale') > -1)) {
            clearInterval(domCheck);
            cartItems.setAttribute('style', 'display:block;');
        }

    };
    if (location.href.search('cart') > -1) domCheck = setInterval(doDomCheck, 200);

    let previousUrl = location.href;
    const urlObserver = new MutationObserver(function(mutations) {
        let cartItemBrands = document.querySelectorAll('.cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand');
        let limitedStock = document.querySelectorAll('.limited');
        for (const mutie of mutations) {
            let free_shipping_area = mutie.target.querySelector('#CartQuantityAsyncForm');
            if (free_shipping_area) {
                document.querySelector('#CartQuantityAsyncForm').style.display = "block";
                if (limitedStock.length > 0) {
                    cartItemBrands.forEach((element, i) => {
                        element.after(limitedStock[i]);
                    });
                }
            }
        }
        if (location.href !== previousUrl) {
            previousUrl = location.href;
        }
    });
    const urlObserverConfig = {
        subtree: true,
        childList: true
    };
    urlObserver.observe(document, urlObserverConfig);

})();