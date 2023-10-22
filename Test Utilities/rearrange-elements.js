
// The goal of this code snippet is write a clean way to wait for elements to load on the page...
//and then reorder them in a given way to test their optimal position on the page for increased conversions

// 1. First we wait until the elements are ready.

const sleepUntil = async (f, timeoutMs) => {
    return new Promise((resolve, reject) => {
      const timeWas = new Date();
      const wait = setInterval(function() {
        if (f()) {
          console.log("resolved after", new Date() - timeWas, "ms");
          clearInterval(wait);
          resolve();
        } else if (new Date() - timeWas > timeoutMs) { // Timeout
          console.log("rejected after", new Date() - timeWas, "ms");
          clearInterval(wait);
          reject();
        }
      }, 20);
    });
  }

  //declare the elements in a variable for safekeeping within the try block. This is where you will do the thing.
  
  try {
      let guaranteeSection = document.querySelector("#shopify-section-template--15582584471691__product-guarantee");
      let testimonialsSection = document.querySelector("#shopify-section-template--15582584471691__1644812433ee8ffcc4 > testimonials-section");
      await sleepUntil(() => guaranteeSection, 2000);
      await sleepUntil(() => testimonialsSection, 1000);
      // 2. Then we swap the location of the elements.
      testimonialsSection.before(guaranteeSection);
 
  } catch {
    console.log('Error. Element took too long to load.')
      // limit reached. Error will be thrown because it took too long to load the element
  }

  async function getCart() {
    const result = await fetch("/cart.json");
    if (result.status === 200) {
        return result.json();
    }
    throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`);
}

const shippingID = setInterval(shippingCallback, 200);
async function shippingCallback() {
let rebuyCart = document.querySelector('div.rebuy-cart__flyout');
if (rebuyCart) {
    clearInterval(shippingID);
    const currentCart = await getCart();
     let sellingPlanProduct = currentCart.items.find(product => product.selling_plan_allocation && product.product_type === "Coffee");
console.log(sellingPlanProduct)
    console.log(currentCart);
// do whatever you need based on this condition being met
}
}