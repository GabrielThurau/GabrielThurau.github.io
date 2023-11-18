
async function getCart() {
    const result = await fetch("/cart.json");

    if (result.status === 200) {
        return result.json();
    }

    throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`);
}

// Example
const cart = await getCart();

cartItems = cart.items;

// cartItems.forEach(cartItem => {
//     const sellingPlanId = cartItem.selling_plan_allocation
//         && cartItem.selling_plan_allocation.selling_plan
//         && cartItem.selling_plan_allocation.selling_plan.id
//    console.log(sellingPlanId)
// });

cartItems.forEach(cartItem => {
    const sellingPlanId = cartItem
        ?.selling_plan_allocation
        ?.selling_plan
        ?.id ?? "No Selling Plan Found!";
    console.log(sellingPlanId)
});
