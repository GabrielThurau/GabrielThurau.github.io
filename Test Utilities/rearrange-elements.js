// for a random client site - https://humann.com/products/superbeets-soft-chews?variant=20791397711983
// The goal of this code snippet is a clean way to first wait for elements to load on the page...
//and then reorder them in a given way to test their optimal position on the page for increased conversions

// 1. first we wait until the elements are ready.

const sleepUntil = async (f, timeoutMs) => {
    return new Promise((resolve, reject) => {
      const timeWas = new Date();
      const wait = setInterval(function() {
        if (f()) {
          console.log("resolved after", new Date() - timeWas, "ms");
          console.log('the element was found');
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
  
  try {
      await sleepUntil(() => document.querySelector("#shopify-section-template--15582584471691__product-guarantee"), 5000);
      // ready
  } catch {
      // timeout
  }

// 2. Then we define the check() callback that will fire once the condition has been met

// const foo = async (evt, callback) => {
//     // do something with evt
//     // return response with callback
//   }


const check = function() {
    let node1 = document.querySelector("#shopify-section-template--15582584471691__product-guarantee");
    let node2 = document.querySelector("#shopify-section-template--15582584471691__1644812433ee8ffcc4");
    if (node1 && node2) {
        console.log('both elements were found');
    }
}

