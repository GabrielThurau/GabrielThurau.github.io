
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




for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
        color = document.querySelector('[data-option-selected="color"]').textContent;
        if (mutation.target.defaultSelected !== false) {
           size = mutation.target.textContent;
           if (size === 'Large') {
             size = size.toLowerCase();
             color = color.toLowerCase();
                let gallery = document.querySelector('product-gallery');
                let slides = gallery.querySelectorAll('swiper-slide > div.aspect-square > img');
                makeImages(color, size, gallery, slides);
           } 
        }
     }
    }