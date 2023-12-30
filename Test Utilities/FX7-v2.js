(function () {
    let stylesgf7 = document.createElement('style');
    stylesgf7.innerHTML = `
    
  
     .limited {
       background: rgba(200, 40, 41, 0.2);
       padding: 0.4rem 0rem;
       display: flex;
       align-items: center;
       border-left: 5px solid #c82829;
       text-align: center;
       justify-content: center;
       font-weight: bold !important; 
       font-size: 1rem;
       margin: 0.4rem 0rem;
      }

  
  @media (max-width:767px){
  .item-content .info-div .cart-item-size {
      display: none;
  }

  .item-content .info-div .stock-msg {
      display: none;
  }
  .price-section .before-price {
      font-size: 0;
      letter-spacing: 0 !important;
      padding-right: 5px !important;
      padding-bottom: 0 !important;
      position: relative;
      top: 0px;
  }
  .price-section .before-price bdo {
    font-size: 16px;
      color: #000;
      letter-spacing: 0;
      
  }
    
  .price-section {
      display: table;
      width: auto;
  }
  
  body:has(.discount-section) .price-section .before-price bdo {
      font-size: 16px;
      letter-spacing: 0;
      text-decoration: line-through;
      color: grey;
  }
  .price-section .after-price {
      font-size: 0;
  }
  .price-section .after-price bdo {
      font-size: 16px;
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
      padding-right: 45px;
  }
  body:has(.discount-section) .price-section:after{
      content: "15% Off";
      text-transform: uppercase;
      background-color: #ffc800;
      font-size: 12px;
      padding: 2px 5px;
      position: absolute;
      white-space: nowrap;
      right: -20px;
      top: 1px;
      border-radius: 2px;
  }
  
  .cart-item-wrapper.nonmessage>div.item-content>div.info-div {
      padding-top: 20px;
      position: relative;
  }
  
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-sku {
      position: absolute;
      top: 0;
  }
  
  .cart-item-wrapper.nonmessage>div.item-content>div.price-div {
      border-top: 1px solid rgb(85 85 85 / 20%);
      padding-top: 30px;
      margin-top: 5px;
  }
  
  .price-section .after-price bdo {
      color: #000;
  }
  
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-size {
      display: block !important;
      position: absolute;
      bottom: -33px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  
  .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-size:before {
      content: "Size:";
      font-weight: 600;
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
    
  }
  @media (min-width:768px){
      .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-name a {
          color: #000 !important;
      }
        .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand {
          padding-bottom: 10px !important;
          margin-bottom: 10px;
          border-bottom: solid 1px rgba(33,22,94,.1);
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
         position:absolute;
          top:0;
          font-size:14px !important;
  
      }
      .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-size:before {
          content: "Size:";
          font-weight: 600;
      }
  
      .cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-size {
          padding-bottom: 0;
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
          padding-top: 25px;
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
  
  }`;
    let domCheck;
    const doDomCheck = function () {
      let cartItemBrands = document.querySelectorAll('.cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand');
      let siteLogo = document.querySelector("#header div.logo-container > a > img");
      let limitedStock = document.querySelectorAll('.limited');
         
      if (cartItemBrands.length > 0 && (siteLogo && siteLogo.src.search('wholesale') === -1)) {            
          document.head.appendChild(stylesgf7);
          if (limitedStock.length > 0) {
            cartItemBrands.forEach((element, i) => {
                element.appendChild(limitedStock[i]);
               });
          }
      
          clearInterval(domCheck);
        document.querySelector('.cart-item-wrapper.nonmessage.cart-product').setAttribute('style','display:block');
 
      } else if(siteLogo && siteLogo.src.search('wholesale') > -1){
        clearInterval(domCheck);
        document.querySelector('.cart-item-wrapper.nonmessage.cart-product').setAttribute('style','display:block');
      }
    };
    domCheck = setInterval(doDomCheck, 200);

    const domObserver = new MutationObserver((mutationList) => {
        let limitedStock = document.querySelectorAll('.limited');
        let cartItemBrands = document.querySelectorAll('.cart-item-wrapper.nonmessage>div.item-content>div:first-child .cart-item-brand');
        const asyncSection = document.getElementById('CartTableAsyncSection');
        if (asyncSection) {
          for (const mutation of mutationList) {
            if (!mutation.target.classList.contains('cart-item-brand') && (limitedStock.length > 0 && cartItemBrands.length > 0)) {
              cartItemBrands.forEach((element, i) => {
                  element.appendChild(limitedStock[i]);
                 });
            }
          }
        }
      });
      domObserver.observe(document.querySelector('#CartTableAsyncSection'), { childList: true, subtree: true });

  })();