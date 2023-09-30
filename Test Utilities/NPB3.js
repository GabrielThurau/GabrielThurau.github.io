function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  addStyle(`
   
  .zpa-bundle-checkbox {
   visibility: visible !important;
  }
    
  `);

let imageBox = document.querySelector('.zpa-bundle-carousel-row');
let children = Array.from(imageBox.children);
let closeParent;

children.forEach(element => {
  element.children[0].classList.add('parent-bundle')
    element.addEventListener('click', (e)=>{
   closeParent = e.target.closest('.parent-bundle')
    if (!closeParent.classList.contains('active-product')) {
      closeParent.classList.add('active-product');
       setTimeout(() => {
          console.log(closeParent.querySelector('.zpa-control__field'))
    closeParent.querySelector('.zpa-control__field').checked === true;
}, 00);
    }

    else {
      
      closeParent.classList.remove('active-product');
      setTimeout(() => {
    // console.log(closeParent.querySelector('.zpa-control__field'))
}, 00);
     
    }
  })
  
});



.
addEventListener("change", (event) => {
    console.log(event);
});


var checkbox = document.querySelector("#zpbundleproductselector2-wrapper > div.zpa-flex--column.xs-12.lg-12.md-12.zpa-bundle-product__column.zpa-bundle-product__column--details > label > input");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});



let firstPrice = document.querySelectorAll("div.zpa-bundle-product-price")[3].textContent.trim();
firstPrice = firstPrice.split('     ');
let secondPrice = document.querySelectorAll("div.zpa-bundle-product-price")[4].textContent.trim();
secondPrice = secondPrice.split('     ');
let thirdPrice = document.querySelectorAll("div.zpa-bundle-product-price")[5].textContent.trim();
thirdPrice = thirdPrice.split('     ');


const firstArray = firstPrice.map(elem=> elem.replace(/\$/g,'')).map(str => parseFloat(str));

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


const dividedArray = firstArray.map(num => num / 3).
map(round => round.toFixed(2)).
map(price => USDollar.format(price));

console.log(firstArray)
console.log(dividedArray)


// firstPrices = []

// let dollar;

// firstArray.forEach(price => {
//     dollar = USDollar.format(price)
//      firstPrices.push(dollar);
//  });