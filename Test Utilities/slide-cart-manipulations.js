
const buttonID = setInterval(buttonCallback, 200);

function buttonCallback() {
  console.log('polling');
  
let cartIcon =  window.innerWidth < 768 ? document.querySelector("div.cart-menu.hide-desktop.hide-tablet > a") : document.querySelector("div.cart-menu.hide-mobile > div > a.cart-icon");
let hamburger = document.querySelector('.hamburger-wrapper');
  
  if (cartIcon || hamburger) {
    clearInterval(buttonID);
    console.log('cart icon was found');
    cartIcon.removeEventListener('click', stopProp);
  }
  
  else if (window.location.href.indexOf("reasons") > -1) {
    clearInterval(buttonID);
  }
}

function waitFor(selector) {
    return new Promise(function (res, rej) {
        waitForElementToDisplay(selector, 200);
        function waitForElementToDisplay(selector, time) {
            if (document.querySelector(selector) != null) {
                res(document.querySelector(selector));
                console.log('found element');
                console.log(selector);
              
                removeListeners(selector);
            }
            else {
                setTimeout(function () {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
    });
}

function stopProp3(e) {
  console.log('clicked');
  e.preventDefault();
  window.SLIDECART_OPEN();
  // e.stopImmediatePropagation()
}

if (window.location.href.indexOf("products") > -1) {
  waitFor('.ProductForm__AddToCart');
}

function removeListeners(selector) {
  
  document.querySelector(selector).removeEventListener('click', redirectCart);
  document.querySelector(selector).removeEventListener('click', stopProp);
}

//gets discount total on load. And then pass it callback function to create HTML and append line item HTML

// window.SLIDECART_LOADED = function(cart) {
//     let cartItems = cart.items;
//   let emptyArray = [];
//    cartItems.forEach(item => {
//     emptyArray.push(item.properties.Discount);
//   });
//   updateSavings();
//   appendHTML();
// }


window.SLIDECART_UPDATED = function(cart) {
  let cartItems = cart.items;
  let emptyArray = [];
   cartItems.forEach(item => {
    emptyArray.push(item.properties.Discount);
  });
  console.log(cart.items[0].properties.Discount);
  updateSavings(emptyArray);
}


function appendHTML() {
  console.log('html appended');
}

function updateSavings(fullArray) {
  const totalPrices = fullArray.map(x => x.split(' ')[1].replace(/[^0-9.-]+/g,""));
  let total = 0;
  let parsedInt;
  totalPrices.forEach(item => {
  parsedInt = parseInt(item);
  total += parsedInt;
  updateHTML();
  });

  console.log(total);

}