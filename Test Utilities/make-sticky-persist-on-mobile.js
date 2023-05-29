// for a random client site - https://nuts.com/
// The goal of this code snippet is to make their sticky bar sticky by default on mobile. Instead of having to click on the search icon. 

// 0.5 - if you want to test in console and add styles to your code - 

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  addStyle(`
    @media (max-width: 769px) {
    .hide-me-now {
      display : none !important;
    }
  }
  `);

  // 0.75 - define sleep function to replace any non-promisified timeouts

  const sleepUntil = async (f, timeoutMs) => {
    return new Promise((resolve, reject) => {
      const timeWas = new Date();
      const wait = setInterval(function() {
        if (f()) {
          console.log("resolved after", new Date() - timeWas, "ms");
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


  // 2. Conditional that checks the returned value of isVisible function. If true, then click search icon button, apply css classes,
  //  pass reference to hidden search bar, and run scrolling up/down function.

if (elementIsVisibleInViewport()) {
     document.querySelector("#trk-persistent-nav > li.search.hidden-sm.hidden-md.hidden-lg > a").click();
       try {
        // 2.5 add hide me classes to the sections we want to disappear
        await sleepUntil(() => document.querySelector("#trk-header > div.ptn-search-box.animated.visible-xs"), 3000);
        // 2.75 run scrollingUpOrDown function debounced
        document.querySelector("#trk-header > div.ptn-search-box.animated.visible-xs").classList.add('hide-me-now');
        document.querySelector("#trk-persistent-nav > li.search.hidden-sm.hidden-md.hidden-lg > a").classList.add('hide-me-now');
        scrollingUpOrDown();
    } catch {
      console.log('Error. Element took too long to load.')
        // limit reached. Error will be thrown because it took too long to load the element
    }
   }

// 3. run function to determine if user is scrolling up or down. Debounce for performance with the 100ms cleartimeout wrap

let timer;
  
function scrollingUpOrDown() {
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
        document.querySelector("#trk-header > div.ptn-search-box.animated.visible-xs").classList.add('hide-me-now');
        console.log('scrolling down')
        } else if (st < lastScrollTop) {
        document.querySelector("#trk-header > div.ptn-search-box.animated.visible-xs").classList.remove('hide-me-now');
          console.log("scrolling up")
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling   
    }, 50);
 }, false);
}




// 3. intersection observer to detect when a specific element is intersecting in viewport

// function runIO() {
//     console.log('intersection observer deployed');

//     let callback = (entries, observer) => {
//         let searchIcon = document.querySelector("#trk-persistent-nav > li.search.hidden-sm.hidden-md.hidden-lg > a");
//         let footerBlock = document.querySelector(".ptn-footer");
//               entries.forEach((entry) => {
//           if(entry.isIntersecting) {
//              console.log('intersecting');
//           }
//           else if (!entry.isIntersecting) {
//              console.log('not intersecting');
//           }
//         });
//       };
      
//       const watch = document.querySelector(".ptn-footer");
//       const ob = new IntersectionObserver(callback)
//       ob.observe(watch);
// }



