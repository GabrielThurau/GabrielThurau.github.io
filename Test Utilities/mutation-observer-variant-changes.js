let previousUrl = '';
const variantObserver = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      console.log(`URL changed to ${location.href}`);
    }
});
const config = {subtree: true, childList: true};
variantObserver.observe(document, config);





// Select the node that will be observed for mutations
// in this case we are looking for size selector

const targetNode = document.querySelector(".selector-wrapper");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    let targetToObserve = document.querySelector('div.box');
     for (const mutation of mutationList) {
       if (mutation.type === "childList" && mutation.target === targetToObserve ) {
         console.log(mutation.target);
       } 
     }
   };
   

// Create an observer instance linked to the callback function
const sizeObserver = new MutationObserver(callback);

// Start observing the target node for configured mutations
sizeObserver.observe(targetNode, config);