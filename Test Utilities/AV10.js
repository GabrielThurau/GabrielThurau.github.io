function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }
    addStyle(`
    @media (min-width: 768px) {
      .ProductName_product-name-container__teWbk .ProductName_additon-des__a2pqM {
    display: block !important;
    }

  .ProductName_product-name-container__teWbk .ProductName_additon-des__a2pqM .ProductName_warranty-info__mdbX6 {
  margin-bottom: 9px !important;
  }

 span.CartArea_affirm-logo__SwkHR > img {
 width: 50px;
 height: 20px;
 }

.CartArea_cart-area-component__IZ4HS .CartArea_price-info__UX8rE .CartArea_price-display__Uu9iA .CartArea_right-price__QOBEi .CartArea_price-show-save__lea_T div {
    font-family: "MonoSpec" !important;
    font-size: 40px !important;
    color: initial !important;
    text-decoration: none;
}

.CartArea_cart-area-component__IZ4HS .CartArea_price-info__UX8rE .CartArea_price-display__Uu9iA .CartArea_right-price__QOBEi .CartArea_price-show-save__lea_T span {
    color: initial;
    text-decoration: none;
}

 
  .CartArea_cart-area-component__IZ4HS .CartArea_price-info__UX8rE .CartArea_price-display__Uu9iA .CartArea_right-price__QOBEi .CartArea_price-show-save__lea_T svg path {
  fill: initial !important;
  }

 div.CartArea_right-price__QOBEi > div:nth-child(2) {
 display: none !important;
 }

 .CartArea_cart-area-component__IZ4HS .CartArea_price-info__UX8rE .CartArea_price-display__Uu9iA .CartArea_right-price__QOBEi {
 display: grid !important;
 grid-template-columns: repeat(2, 1fr);
 }

    }
  
    `);



const promoID = setInterval(promoCallback, 200);

function promoCallback() {

let priceArea = document.querySelector("div.CartArea_price-info__UX8rE > div");

const oneTimePurchase = `
<span class="otp">One-Time Purchase</span>
`

priceArea.insertAdjacentHTML('afterbegin', oneTimePurchase)

let financingDiv = document.createElement('div');
financingDiv.classList.add('financing-div');
let affirm = document.querySelector('.CartArea_affirm-message___vy_e');
financingDiv.appendChild(affirm);




let rightPriceDiv = document.querySelector('.CartArea_right-price__QOBEi')
let promoArea = document.querySelector('.CartArea_price-info__UX8rE');


if (promoArea) {
    clearInterval(promoID);
  
    rightPriceDiv.appendChild(financingDiv);
    const copyPart = document.querySelector(".CartArea_affirm-message___vy_e");
    let text = copyPart.textContent;
    let number = text.match(/\d/g);
    number = number.join("");


    const markup = `

    <div class="CartArea_affirm-prequalify-content__VfkEu">
    <div class="CartArea_affirm-message___vy_e">Financing starting at $<!-- -->76<!-- -->/mo with&nbsp;
    <span class="CartArea_affirm-logo__SwkHR">
    <img loading="lazy" alt="Affirm Logo" src="https://cdn.rowaviron.com/web/product-detail-page/affirm-logo-x3.png"></span>
    <span class="CartArea_affirm-button__O91eF affirm-product-modal" id="affirm-prequalify-button" data-amount="199900" style="cursor: pointer;" aria-label="Prequalify now. - Affirm Financing (opens in modal)">Prequalify now.
    </span>
    </div>
    </div>

    `
}

}