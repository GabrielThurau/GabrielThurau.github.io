

const compose = 
(...fns) => (val) => 
fns.reduceRight((acc, fn) => fn(acc), val);

async function getCart() {
    const result = await fetch("/cart.json");

    if (result.status === 200) {
        return result.json();
    }

    throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`);
}

const cart = await getCart();
const cartItems = cart.items;

const discountedProducts = (products) => cartItems.filter((product) => product.discounts.amount);
const productNames = (products) => cartItems.map((product) => product.handle);

const discounts = compose(productNames, discountedProducts);

discounts(cartItems);
