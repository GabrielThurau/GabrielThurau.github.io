async function fetchText() {
    let response = await fetch('https://theearthlingco.com/products/shampoo-bars.json');
    let data = await response.json();
    console.log(data);
}

fetchText();




let formData = {
    'items': [{
     'id': 36110175633573,
     'quantity': 2
     }]
   };
   
   fetch(window.Shopify.routes.root + 'cart/add.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   .then(response => {
     return response.json();
   })
   .catch((error) => {
     console.error('Error:', error);
   });
   
   
   