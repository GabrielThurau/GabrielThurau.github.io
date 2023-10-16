
function setInnerHTML(element, html) {
    element.innerHTML = html;

    // Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
    element.querySelectorAll('script').forEach(oldScriptTag => {
      const newScriptTag = document.createElement('script');
      Array.from(oldScriptTag.attributes).forEach(attribute => {
        newScriptTag.setAttribute(attribute.name, attribute.value)
      });
      newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
      oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
    });
  }




  fetch(opener.getAttribute('data-product-url'))
  .then((response) => response.text())
  .then((responseText) => {
    const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
    this.productElement = responseHTML.querySelector('section[id^="MainProduct-"]');
    console.log(this.productElement);
    this.preventDuplicatedIDs();
    this.removeDOMElements();
    this.setInnerHTML(this.modalContent, this.productElement.innerHTML);

    if (window.Shopify && Shopify.PaymentButton) {
      Shopify.PaymentButton.init();
    }

    if (window.ProductModel) window.ProductModel.loadShopifyXR();

    this.removeGalleryListSemantic();
    this.updateImageSizes();
    this.preventVariantURLSwitching();
    super.show(opener);
  })
  .finally(() => {
    opener.removeAttribute('aria-disabled');
    opener.classList.remove('loading');
    opener.querySelector('.loading-overlay__spinner').classList.add('hidden');
  });
}
