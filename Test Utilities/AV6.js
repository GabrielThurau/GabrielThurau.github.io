// Hi dev team!
// For this test we are going to refresh the design of the upsells in the cart and test which packages are shown.
// This test will apply when a user adds the Strong Series Rower or the Impact Series Rower to their cart.


// Variant 1 - New Design; Premium Only
// Updated upsell design with bullet point/checkmark descriptions
// Only show the Premium Package upsell
const markup2 =
    `
    <div class="whats-included">
    <h3 class="whats-header">What's Included</h3>
    <ul class="whats-list">
    <li>✓ Non-Slip Rower Mat</li>
    <li>✓ Quick Release Hook & Loop Straps</li>
    <li>✓ Cloud Seat</li>
    <li>✓ Quick Adjust Resistance Remote</li>
    </ul>
    </div>
    `


window.fetch = new Proxy(window.fetch, {
    apply(actualFetch, that, args) {
        // Forward function call to the original fetch
        const result = Reflect.apply(actualFetch, that, args);
        // Do whatever you want with the resulting Promise
        result.then((response) => {
            addMarkup();
            console.log(response);
        });
        return result;
    }
});


// async function doStuff() {
//     await wait(500);
//     deployObserver();
// }
// const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

// const deployObserver = function() {
//     console.log('observer deployed');
//     const _soCartConfig = {
//         attributes: true,
//         childList: true,
//         subtree: true
//     };

//     const soCallback = (mutationList) => {
//         for (const mutation of mutationList) {
//             if (mutation.type === 'childList' &&
//                 mutation.target.classList.includes('Upsell_upsell__TBAs')) {
//                 console.log(mutation)
//             }
//         }
//     };

//     const _soCartObserver = new MutationObserver(soCallback);
//     _soCartObserver.observe(document.querySelector("#cart-drawer-menu"), _soCartConfig);
// }

// doStuff();


if (window.jQuery) {
    console.log('there')
} else {
    console.log('not there')
}




// Variant 2 - New Design; Performance Only
// Updated upsell design with bullet point/checkmark descriptions
// Only show the Performance Package upsell




let buyButton = document.querySelector('a.buy-button');

buyButton.addEventListener('click', doSwap);

function doSwap(e) {
console.dir(e.target)
}

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
    padding-top: 2rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-around;
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

    div.whats-included + div[class^="Upsell_upsell__item"] {
    display: none;
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

    `);


async function doStuff() {
    await wait(500);
    deployObserver();
}
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const deployObserver = function() {
    console.log('observer deployed');
    const _soCartConfig = {
        attributes: true,
        childList: true,
        subtree: true
    };

    const soCallback = (mutationList) => {
     let mutationArray = [];
        for (const mutation of mutationList) {
            if (mutation.type === 'childList' 
                && mutation.target.id === 'cart-drawer-menu'
                && mutation.target.childNodes.length > 0) {
              console.dir(mutation.target); 
             const componentID = setInterval(componentCallback, 100);
                function componentCallback(nodeToCheck) {
                nodeToCheck = document.querySelector('.Upsell_upsell__item__m_WdJ');
                if (nodeToCheck) {
                    console.log('interval cleared');
                    clearInterval(componentID);
                    addMarkup();
                }
            }
            }
        }
    };

    const _soCartObserver = new MutationObserver(soCallback);
    _soCartObserver.observe(document.querySelector("#cart-drawer-menu"), _soCartConfig);
}

doStuff();




 //  && mutation.target.classList[0].includes('Upsell_upsell__T8As')

 // && mutation.target.attributes[0].nodeValue === 'Upsell_upsell___T8As')


function addMarkup() {
 setTimeout(() => {
    const upsellItem = document.querySelector('.Upsell_upsell__item__m_WdJ');
    const itemAdd = document.querySelector("div.Upsell_upsell__item__add__1R2v9");
    const upsellDiv = document.querySelector('.Upsell_upsell__item__content__ru54e');
    //const svgToDelete = itemAdd.querySelector('svg');
    const upsellTitle = document.querySelector("div.Upsell_upsell__item__content__ru54e > h4");
    const performanceImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Strong Performance Package"]');
    const premiumImage = document.querySelector('div[class^="Upsell_upsell__item"] > picture > img[alt="Strong Premium Package"]');
    const markupPerformance =
        `
    <div class="whats-included">
    <h3 class="whats-header">What's Included:</h3>
    <ul class="whats-list">
    <li>✓ Non-Slip Rower Mat</li>
    <li>✓ Quick Release Hook & Loop Straps</li>
    </ul>
    </div>
    `

    const markupPremium = `
    <div class="whats-included">
    <h3 class="whats-header">What's Included</h3>
    <ul class="whats-list">
    <li>✓ Non-Slip Rower Mat</li>
    <li>✓ Quick Release Hook & Loop Straps</li>
    <li>✓ Cloud Seat</li>
    <li>✓ Quick Adjust Resistance Remote</li>
    </ul>
    </div>
    `

    const markup3 = `
    <a class="buy-button">UPGRADE</a>
    `
    if (upsellTitle.textContent.toLowerCase().includes('premium')) {
        premiumImage.src = "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-premium.png?v=1699913262";
    }
    // if (svgToDelete) {
    //     svgToDelete.remove();
    // }
    upsellDiv.insertAdjacentElement('beforeend', itemAdd);
    itemAdd.insertAdjacentHTML('afterbegin', markup3);
    if (performanceImage) {
        performanceImage.src = "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/strong-performance-package.png?v=1699913218";
    }
    const markupCheck = upsellTitle.textContent.toLowerCase() === 'strong performance package' ?
        upsellItem.insertAdjacentHTML('afterend', markupPerformance) :
        upsellItem.insertAdjacentHTML('afterend', markupPremium);
    return markupCheck;
}, 0);
}






// Variant 3 - New Design; Premium then Performance
// Updated upsell design with bullet point/checkmark descriptions
// Show the premium package first and then the performance package - flex the container - column-reverse




// Variant 4 - New Design; Performance then Premium
// Updated upsell design with bullet point/checkmark descriptions
// Show the performance package first and then the premium package