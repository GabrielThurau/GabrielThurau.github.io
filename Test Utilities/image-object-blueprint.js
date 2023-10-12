const imageConfig = {
    attributes: true,
    childList: true,
    subtree: true
 };

 // observing variant changes based on size and color selected
 const imageCallback = (mutationList) => {
    let size;
  
    for (const mutation of mutationList) {
       let color;
       if (mutation.type === 'childList') {
          color = document.querySelector('[data-option-selected="color"]').textContent;
          if (mutation.target.defaultSelected !== false) {
             size = mutation.target.textContent;
             if (size === 'Large') {
               size = size.toLowerCase();
               color = color.toLowerCase();
               setTimeout(() => {
                  let gallery = document.querySelector('product-gallery');
                  let slides = gallery.querySelectorAll('swiper-slide > div.aspect-square > img');
                  makeImages(color, size, gallery, slides);
               }, 200);
              
             } else {
               size = 'Small'
               size = size.toLowerCase();
               color = color.toLowerCase();
               setTimeout(() => {
                  let gallery = document.querySelector('product-gallery');
                  let slides = gallery.querySelectorAll('swiper-slide > div.aspect-square > img');
                  makeImages(color, size, gallery, slides);
               }, 200);
             }
          }
       }
    }
 };
 const imageObserver = new MutationObserver(imageCallback);
 imageObserver.observe(document.querySelector('[data-option-selected="size"]'), imageConfig);
 

 class Image {
	constructor( color, size, id) {
		this.color = color,
      this.size = size,
      this.id = id
	}

	// Adding a method to the constructor
	generateImage() {
		return `https://cdn.shopify.com/s/files/1/0712/1227/files/${this.color}-${this.size}-${this.id}.jpg`; //images uploaded to Shopify following this convention
    }
}


// need to do something more legit and find the objects like this?

let arr = [
   { name:"string 1", value:"this", other: "that" },
   { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);

function makeImages(color, size, gallery, slides) {
   let quantity = slides.length;
   let largeArray = [];
   let testArray = [];
   let k = 0;
   let image;
   for (let i = 0; i < quantity; i++) {  
      if (quantity > slides.length / 2) {
         k++
         image = new Image(color, size, k);
      }
      image = new Image(color, size, i);
      testArray.push(image);
      largeArray.push(image.generateImage());
   }




   testArray.forEach(image => {
      image['bruh'] = "Gabe";
     });



     console.log(testArray)


   for (let j = 0; j < quantity; j++) {
      const element = slides[j];
      setTimeout(() => {
         element.srcset = largeArray[0] // hardcoded for testing purposes
         element.src = largeArray[0] // hardcoded for testing purposes
       }, 0);
   }
   }




   let gallery = document.querySelector('product-gallery');
   let slides = gallery.querySelectorAll('swiper-slide > div.aspect-square > img');

   slides.forEach( (element, index) => {
      console.log(element.alt);
      // if (element.alt.contains('infographic')) {
      //    element.closest('swiper-slide').remove();
      // }
   });

function largeImages(size, color, id = 0, variant = "v1", quantity) {
   let largeObject = {
      largeImage1: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id}.jpg`,
      largeImage2: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 1}.jpg`,
      largeImage3: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 2}.jpg`,
      largeImage4: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 3}.jpg`,
      largeImage5: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 4}.jpg`,
      largeImage6: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 5}.jpg`,
      largeImage7: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 6}.jpg`,
      largeImage8: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 7}.jpg`
   };
   console.log(largeObject);
}

Object.values(largeObject)


//    // build giant image object for small images
 
//  function smallImages(size, color, id = 0, variant = "v1") {
 
//    let allSmall = {
//       smallImage1: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id}.jpg`,
//       smallImage2: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 1}.jpg`,
//       smallImage3: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 2}.jpg`,
//       smallImage4: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 3}.jpg`,
//       smallImage5: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 4}.jpg`,
//       smallImage6: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 5}.jpg`,
//       smallImage7: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 6}.jpg`,
//       smallImage8: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 7}.jpg`
//    };

//    console.log(smallObject);
//    console.log(color);
// }


// build giant image object for large images

//  function largeImages(size, color, id = 0, variant = "v1") {
//     let largeObject = {
//        largeImage1: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id}-.jpg`,
//        largeImage2: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 1}.jpg`,
//        largeImage3: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 2}.jpg`,
//        largeImage4: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 3}.jpg`,
//        largeImage5: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 4}.jpg`,
//        largeImage6: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 5}.jpg`,
//        largeImage7: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 6}.jpg`,
//        largeImage8: `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id + 7}.jpg`
//     };
//     console.log(largeObject);
//  }





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
[104.85, 74.95]
['$34.95', '$24.98']


const pipeAsyncFunctions = (...fns) =>
  arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

const sum = pipeAsyncFunctions(
   x => x + 1,
   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
   x => x + 3,
   async x => (await x) + 4
 );
 (async() => {
   console.log(await sum(5)); // 15 (after one second)
 })();



 const hockeyTeams = ["Rangers", "Sabres", "Blackhawks(boo)", "Red Wings", "Pens", "Sens"];
const [first, second, ...rest] = ["Blues", "Stars", ...hockeyTeams];

hockeyTeams.push(first);
hockeyTeams.push(second);

console.log(first); // 
console.log(second); // 
console.log(rest); // 
console.log(hockeyTeams)
