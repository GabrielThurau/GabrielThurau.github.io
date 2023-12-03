// gift ship checkout to redirect to after product is added to cart https://eatmila.com/a/gs/cart/ 


(() => {


// mini function for redirecting user once post is successful. Prevent rebuy cart from opening as well. 


window.fetch = new Proxy(window.fetch, {
  apply(actualFetch, that, args) {
      // Forward function call to the original fetch
      const result = Reflect.apply(actualFetch, that, args);
       const giftCheck = document.querySelector('.')
      // Do whatever you want with the resulting Promise
      result.then((response) => {
        if (giftCheck.checked) {
          window.location.href = 'https://eatmila.com/a/gs/cart/';
        }
      });

      return result;
  }
});
      

      
    })();