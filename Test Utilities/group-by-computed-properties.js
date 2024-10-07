const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Peter", age: 30 },
  ]
  
  const groupedByAge = Object.groupBy(people, person => person.age)

  function createProduct(id, name, price) {
    const product = {};
    product[id] = {
      name,
      price
    };
    return product;
  }
  
  const productId = "ABC123";
  const productData = createProduct(productId, "Sample Product", 9.99);
  console.log(productData);



    function createDataObject(title, id, handle, price) {
       const product = {};
       product[title] = {
         title,
         handle,
         price
       };
       return product;
     }



    // my usecase


    async function getCart() {
      const cartJSON = await fetch('/cart.js');
   
      if (cartJSON.status === 200) {
          return cartJSON.json();
      }
   
      throw new Error('not working bruh')
   }
   
   const cart = await getCart();
   const productByTitle = Object.groupBy(cart.items, ({ title }) => title);

   console.log(productByTitle);



   function objectify (key, value) {
    return {
      [key]: value
    }
  }
  
   




  function objectify (key, value) {
    return {
      [key]: value
    }
  }
  
  objectify('name', 'Tyler') // { name: 'Tyler' }


  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];


  function myCallback({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
  }
  
  const result2 = Object.groupBy(inventory, myCallback)





 
 //result['2 Liquid Beets Plus FREE Shaker']



