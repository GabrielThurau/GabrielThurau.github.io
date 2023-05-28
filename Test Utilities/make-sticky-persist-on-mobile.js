// for a random client site - https://nuts.com/
// The goal of this code snippet is to make their sticky bar sticky by default on mobile. Instead of having to click on the search icon. 


// 1. First Step is to make sure only elements that are visible on mobile are actually visibile within the viewport i.e. the search icon
// https://www.30secondsofcode.org/js/s/element-is-visible-in-viewport/

let el;

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    el = document.querySelector("#trk-persistent-nav > li.search.hidden-sm.hidden-md.hidden-lg > a");
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };


  // 2. Conditional that checks the returned value of isVisible function. If true, then run intersection observer function.

if (elementIsVisibleInViewport(el)) {
    console.log('the element is visible');
    runIO();
}

// 3. 

function runIO() {
    console.log('intersection observer deployed');
}
