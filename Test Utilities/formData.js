
// form selector is built off of this convention
// "#product_form_${product.id}"

const productID = meta.product.id ??= document.querySelector("div.disclosure--root").dataset.id
const form = document.querySelector(`#product_form_${productID}`);

// build out map with liquid based on the product information output
// these numbers are currently hardcoded

const bundleCounterparts = new Map();

bundleCounterparts.set('Classic Pork', 39675646804097);
bundleCounterparts.set('Savory Chicken', 39675646869633);
bundleCounterparts.set('Shrimp & Pork', 39675646836865);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {
  const data = event.formData;
  const skio = document.querySelector('skio-plan-picker');
  const selectedTitle = skio.__selectedVariant.title;
  const sellingPlanSelected = skio.__selectedSellingPlan;
  let variantID = bundleCounterparts.get(selectedTitle)
  sellingPlanSelected && data.set('id', variantID);
});