/* CUSTOM CODE */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }
    addStyle(`
    .whats-included {
    border-radius: 0px 0px 8px 8px;
    background: #F2F2F2;
    border-right: 1px solid #161616;
    border-left: 1px solid #161616;
    border-bottom: 1px solid #161616;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    display: flex;
    justify-content: space-around;
    }
    
    div.Upsell_upsell-component__Ift65 > div > div {
    display: flex;
    flex-direction: column;
    }
    
    .Upsell_upsell-component__Ift65 {
    margin-top: 26px !important;
    }
    
    div.Upsell_upsell-component__Ift65 > div > div {
    padding: 0rem 1rem;
    }
    
    div.Upsell_upsell__item__content__ru54e > div > svg {
    display: none;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__content__ru54e h4 {
    margin-bottom: 0;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__content__ru54e h5 {
    margin: 0 !important;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__m_WdJ {
    gap: 25px;
    padding: 2rem !important;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__image__s6DnR img {
    height: 100px !important;
    width: 100px !important;
    object-fit: fill;
    }
    
    h3.whats-header {
    margin: 0;
    color: #161616 !important;
    leading-trim: both;
    text-edge: cap;
    font-family: Work Sans !important;
    font-size: 12px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: normal;
    text-transform: uppercase !important;
    width: min-content;
    line-height: 15px !important;
    position: relative;
    top: 5px;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__add__1R2v9 {
    height: 2rem;
    }
    
    .buy-button {
    border-radius: 55px;
    background: #161616;
    color: #FFF !important;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Work Sans !important;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal;
    text-transform: uppercase !important;
    width: 10rem;
    height: 25px;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    position: relative;
    right: 5px;
    }
    
    .buy-button::hover {
    text-decoration: none;
    }
    
    .whats-list {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: Work Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 141.667% */
    list-style: none;
    padding: 0;
    margin: 0;
    
    }
    
    .Upsell_upsell__item__m_WdJ {
    border-radius: 8px 8px 0px 0px !important;
    border-right: 1px solid #161616;
    border-left: 1px solid #161616;
    border-top: 1px solid #161616;
    background-color: #FFF !important;
    border-bottom: none;
    }
    
    .Upsell_upsell-component__Ift65 .Upsell_upsell__item__m_WdJ {
    margin-bottom: 0;
    }
    
    .hide-on-performance {
    display: none !important;
    }
    `);
    
    console.log('variation 4 running');
    let el = document.querySelector('#cart-drawer-menu');
    const addMarkup = () => {
    if(!el.classList.contains('av6')){
    el.classList.add('av6');
    setTimeout(() => {
    let cartItems = document.querySelectorAll('.cart-item-name');
    
    for (const item of cartItems) {
    
    if (item.textContent.toLowerCase().includes('performance')
    && cartItems.length > 0) {
    console.log('performance in cart');
    setTimeout(() => {
    document.querySelector("div.whats-included > ul > li:nth-child(3)").removeAttribute('class')
    document.querySelector("div.whats-included > ul > li:nth-child(4)").removeAttribute('class')
    }, 100);
    
    }
    }
    
    const upsellItem = document.querySelector('.Upsell_upsell__item__m_WdJ');
    const itemAdd = document.querySelector("div.Upsell_upsell__item__add__1R2v9");
    const upsellDiv = document.querySelector('.Upsell_upsell__item__content__ru54e');
    const upsellItemTwo = document.querySelectorAll('.Upsell_upsell__item__m_WdJ')[1];
    const itemAddTwo = document.querySelectorAll("div.Upsell_upsell__item__add__1R2v9")[1];
    const upsellDivTwo = document.querySelectorAll('.Upsell_upsell__item__content__ru54e')[1];
    const performanceImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Strong Performance Package"]');
    const premiumImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Strong Premium Package"]');
    const impactPerfImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Impact Performance Package"]');
    const impactPremImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Impact Premium Package"]');
    const markupPremium = `
    <div class="whats-included">
    <h3 class="whats-header">What's Included</h3>
    <ul class="whats-list">
    <li>✓ Non-Slip Rower Mat</li>
    <li>✓ Quick Release Hook & Loop Straps</li>
    <li class="hide-on-performance">✓ Cloud Seat</li>
    <li class="hide-on-performance">✓ Quick Adjust Resistance Remote</li>
    </ul>
    </div>
    `;
    
    const buttonMarkup = `
    <a class="buy-button">UPGRADE</a>
    `;

     if (premiumImage) {
    premiumImage.src = "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-premium.png?v=1699913262";
    }
    if (performanceImage) {
    performanceImage.src = "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-peformance-200.png?v=1700086935";
    }
    
    if (impactPerfImage) {
    impactPerfImage.src = 'https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-peformance-200.png?v=1700086935';
    }
    
    if (impactPremImage) {
    impactPremImage.src = 'https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-peformance-200.png?v=1700086935';
    }

    
    upsellDiv.insertAdjacentElement('beforeend', itemAdd);
    itemAdd.insertAdjacentHTML('afterbegin', buttonMarkup);
    upsellItem.insertAdjacentHTML('afterend', markupPremium);
    
    if (upsellItemTwo && itemAddTwo && upsellDivTwo) {
    upsellDivTwo.insertAdjacentElement('beforeend', itemAddTwo);
    itemAddTwo.insertAdjacentHTML('afterbegin', buttonMarkup);
    upsellItemTwo.insertAdjacentHTML('afterend', markupPremium);
    Array.from(document.querySelectorAll('.hide-on-performance')).at(-1).classList.remove('hide-on-performance')
    Array.from(document.querySelectorAll('.hide-on-performance')).at(-1).classList.remove('hide-on-performance')
    }
    
    }, 0);
    }
      setTimeout(() => {
    let buyButton = document.querySelector('a.buy-button');
    addListener(buyButton);
    }, 100);
    };
    const findEmptyThing = () => {
    el = document.querySelector('#cart-drawer-menu');
    if(el && el.children.length === 0){
    clearInterval(doFindThing);
    doFindThing = setInterval(findThing,200);
    }
    };
    const findThing = () => {
    el = document.querySelector('#cart-drawer-menu');
    upsell = document.querySelector('.Upsell_upsell__item__m_WdJ');
    if(el && el.children.length > 0 && upsell) {
    clearInterval(doFindThing);
    addMarkup();
    doFindThing = setInterval(findEmptyThing,200);
    }
    };
    let doFindThing = setInterval(findThing,200);


    
    function doSwap(e) {
        console.log('click')
        document.querySelector("div.Upsell_upsell-component__Ift65 > div > div > div:nth-child(2)").style.display = "none";
    if (document.querySelector("div.Upsell_upsell__item__image__s6DnR > picture > img")) {
     document.querySelector("div.Upsell_upsell__item__image__s6DnR > picture > img").addEventListener('load', swapOnLoad, { once: true });
    }
   
    }
    
    const swapOnLoad = () => {
    console.log('image loaded');
    document.querySelector("div.Upsell_upsell__item__image__s6DnR > picture > img").src = "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-premium.png?v=1699913262";
    };
    
    
    function addListener(buyButton) {
    if (buyButton) {
    console.log('event listener added');
    buyButton.addEventListener('click', doSwap);
    }
    }
    


