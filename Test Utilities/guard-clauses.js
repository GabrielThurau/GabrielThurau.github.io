
const imageConfig = {
    attributes: true,
    childList: true,
    subtree: true
 };


const imageCallback = (mutationList) => {
    const gallery = document.querySelector('product-gallery');
    const slides = gallery.querySelectorAll('swiper-slide > div.aspect-square > img');
    const color = document.querySelector('[data-option-selected="color"]').textContent.toLowerCase();
    for (const mutation of mutationList) {
    const size =  mutation.target.textContent.toLowerCase(); 
       if (mutation.type !== 'childList') return;
       if (mutation.target.defaultSelect === false) return;
       makeImages(color, size, slides);
    }
 };
 const imageObserver = new MutationObserver(imageCallback);
 imageObserver.observe(document.querySelector('[data-option-selected="size"]'), imageConfig);


 function makeImages(color, size, slides) {
   console.log({color, size, slides})
    }