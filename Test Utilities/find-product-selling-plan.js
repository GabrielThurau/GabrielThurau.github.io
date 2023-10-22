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
     let sellingPlanProduct = currentCart.items
     .find(product => product.selling_plan_allocation 
      && product.product_type === "Coffee");
console.log(sellingPlanProduct)
    console.log(currentCart);
// do whatever you need based on this condition being met
}
}