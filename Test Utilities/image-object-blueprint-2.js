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


function makeImages(color, size, gallery, slides) {
   const quantity = slides.length;
   const largeArray = [];
   let image;
   for (let i = 0; i < quantity; i++) {  
      image = new Image(color, size, i);
      largeArray.push(image.generateImage());
   }
}







let obj = { 'a': 'a' };
//let func = () => 'hey';

// generate an image based on a strict naming convention

const generateImage = (color, size, id) => {
    return `https://cdn.shopify.com/s/files/1/0712/1227/files/${color}-${size}-${id}.jpg`; 
  };

  let imagesToGenerate = document.querySelectorAll('.image-container');

  imagesToGenerate.forEach(image => {
    generateImage()
});

//you can also initialize multiple values at once using array syntax
let map = new Map([[obj, 'object'], [generateImage, 'function']])

function generateMap(...images) {
    
}

map.keys() // 123, true, Object, () => 'hey'
map.get(func) // 'function'
map.get({ 'a': 'a' }) // undefined 
//Object and Functions are stored by reference, so { 'a':'a' } and obj are different objects)