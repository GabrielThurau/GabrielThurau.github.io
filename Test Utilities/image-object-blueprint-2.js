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
   const quantity = slides.length;
   const largeArray = [];
   const testArray = [];
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

}