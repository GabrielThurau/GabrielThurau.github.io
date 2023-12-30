/* CUSTOM CODE */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}
addStyle(`
    .product-image-wrap > img {
    width: 135px;
    height: 115px;
    margin-bottom: 2rem;
    background: #f4f4f4;
    }

    div.CartDrawer_drawer-cart-box__LK78a > div.text-center > h3 {
        text-align: center;
        font-family: GRIFTER;
        font-size: 26px !important;
        font-weight: 700;
        color: #333029;
    }

    a.product-link {
        color: inherit;
    }

    a.product-link:hover {
        text-decoration: none; 
    }

    div.product {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }

    .review-and-text {
        text-align: left;
    }

     .review-and-text > h4 {
        color: #333029;
        font-size: 18px !important;
        font-family: GRIFTER;
        font-weight: 700;
    }

    .end-boring-workout {
        color: #5e5e5e;
        font-size: 14px !important;
        font-weight: 400 !important;
        font-family: Work Sans;
        margin-bottom: 2.5rem;
    }

    .new-badge {
        display: flex;
        gap: 10px;
        border-radius: 100px;
        background: linear-gradient(90deg, #FFC700 0%, #FF7601 100%);
        width: 50px;
        height: 20px;
        color: #161616;
        font-size: 10.5px;
        font-weight: bold;
        font-family: GRIFTER;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.7rem;
    }

    .product-button {
     width: 328px;
     height: 52px;
     border-radius: 100px;
     border: 2px solid #000;
     background: #FF4106;
     box-shadow: 4px 4px 0px 0px #161616;
     color: #fff !important;
     display: flex; 
     justify-content: center;
     text-align: center;
     margin: 0 auto; 
     align-items: center;
    }

    :nth-child(2 of .product-button) {
    background: #fff !important;
     color: #000 !important;
     margin: 1.5rem auto;
    }
 
    `);

const addMarkup = () => {
    let el = document.querySelector('#cart-drawer-menu');
    let cartText = document.querySelector("div.CartDrawer_drawer-cart-box__LK78a > div:nth-child(1)")
    if (!el.classList.contains('av14') && cartText) {
        el.classList.add('av14');

      const cartHeading =  
      
      `
      
      <h4 class="end-boring-workout">End boring workouts today!</h4>
      
      `

      const twoButtons = 
          
      `
      <div class="button-container">
      <a href="https://www.avironactive.com/shop/?product=strong" class="product-button">SHOP ROWERS</a>
      <a href="https://www.avironactive.com/shop/?machineType=accessories" class="product-button">SHOP ACCESSORIES</a>
      </div>
     
      
      `

        const emptyCartMarkupV1 =
            `
    <section class="empty-cart-sect">
    <div class="empty-cart-wrap">
    <a class="product-link" href="https://www.avironactive.com/shop/strong-series-rower/">
    <div class="product">
    <div class="product-image-wrap strong-rower">
    <img src="https://www.avironactive.com/temp/strongGo/strongMachine.webp">
    </div>
    <div class="review-and-text">
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="12" viewBox="0 0 65 12" fill="none">
    <path d="M5.8564 0L7.64651 3.69344L11.7128 4.25517L8.75337 7.09943L9.47566 11.1399L5.8564 9.20383L2.23666 11.1399L2.95944 7.09943L0 4.25517L4.0663 3.69344L5.8564 0Z" fill="#FF4106"></path>
    <path d="M19.033 0L20.8231 3.69344L24.8894 4.25517L21.9299 7.09943L22.6522 11.1399L19.033 9.20383L15.4132 11.1399L16.136 7.09943L13.1766 4.25517L17.2429 3.69344L19.033 0Z" fill="#FF4106"></path>
    <path d="M32.2158 0L34.0059 3.69344L38.0722 4.25517L35.1127 7.09943L35.835 11.1399L32.2158 9.20383L28.596 11.1399L29.3188 7.09943L26.3594 4.25517L30.4257 3.69344L32.2158 0Z" fill="#FF4106"></path>
    <path d="M45.3877 0L47.1778 3.69344L51.2441 4.25517L48.2846 7.09943L49.0069 11.1399L45.3877 9.20383L41.7679 11.1399L42.4907 7.09943L39.5312 4.25517L43.5975 3.69344L45.3877 0Z" fill="#FF4106"></path>
    <path d="M58.5611 0L60.3512 3.69344L64.4175 4.25517L61.4581 7.09943L62.1803 11.1399L58.5611 9.20383L54.9413 11.1399L55.6641 7.09943L52.7047 4.25517L56.771 3.69344L58.5611 0Z" fill="#FF4106"></path>
    </svg>
    <span class="review-rating">4.9</span>
    <h4 class="product-title-empty-cart">Shop Strong <br> Rower</h4>
    </div>
    </div>
    </a>
    <a class="product-link" href="https://www.avironactive.com/shop/strong-go-rower/">
    <div class="product">
    <div class="product-image-wrap strong-go">
    <img src="https://www.avironactive.com/temp/strongGo/strongGoPoint.webp">
    </div>
    <div class="review-and-text">
    <div class="new-badge">NEW</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="12" viewBox="0 0 65 12" fill="none">
    <path d="M5.8564 0L7.64651 3.69344L11.7128 4.25517L8.75337 7.09943L9.47566 11.1399L5.8564 9.20383L2.23666 11.1399L2.95944 7.09943L0 4.25517L4.0663 3.69344L5.8564 0Z" fill="#FF4106"></path>
    <path d="M19.033 0L20.8231 3.69344L24.8894 4.25517L21.9299 7.09943L22.6522 11.1399L19.033 9.20383L15.4132 11.1399L16.136 7.09943L13.1766 4.25517L17.2429 3.69344L19.033 0Z" fill="#FF4106"></path>
    <path d="M32.2158 0L34.0059 3.69344L38.0722 4.25517L35.1127 7.09943L35.835 11.1399L32.2158 9.20383L28.596 11.1399L29.3188 7.09943L26.3594 4.25517L30.4257 3.69344L32.2158 0Z" fill="#FF4106"></path>
    <path d="M45.3877 0L47.1778 3.69344L51.2441 4.25517L48.2846 7.09943L49.0069 11.1399L45.3877 9.20383L41.7679 11.1399L42.4907 7.09943L39.5312 4.25517L43.5975 3.69344L45.3877 0Z" fill="#FF4106"></path>
    <path d="M58.5611 0L60.3512 3.69344L64.4175 4.25517L61.4581 7.09943L62.1803 11.1399L58.5611 9.20383L54.9413 11.1399L55.6641 7.09943L52.7047 4.25517L56.771 3.69344L58.5611 0Z" fill="#FF4106"></path>
    </svg>
    <span class="review-rating">4.9</span>
    <h4 class="product-title-empty-cart">Shop Strong <br> Go Rower</h4>
    </div>
    </div>
    </a>
    </div>
    </section>
    `
            console.log('cart is empty...inject HTML');
            document.querySelector("div.CartDrawer_drawer-cart-box__LK78a > div:nth-child(2)").innerHTML = emptyCartMarkupV1;
            cartText.insertAdjacentHTML('beforeend', cartHeading);
            cartText.insertAdjacentHTML('beforeend', twoButtons);
    }
}

const findEmptyThing = () => {
    el = document.querySelector('#cart-drawer-menu');
    if (el && el.children.length === 0) {
        clearInterval(doFindThing);
        doFindThing = setInterval(findThing, 200);
    }
};


const findThing = () => {
    el = document.querySelector('#cart-drawer-menu');
    if (el && el.children.length > 0) {
        clearInterval(doFindThing);
        addMarkup();
        doFindThing = setInterval(findEmptyThing, 200);
    }
};
let doFindThing = setInterval(findThing, 200);