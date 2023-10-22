
//common approache to debounce an event - like mousemove or scroll

//approach #1


const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }
  
  
  
  const handleScroll = debounce((ev) => {
    console.log('debounced scroll');
  }, 250);
  window.addEventListener('scroll', handleScroll);


multiplyAndAdd1 = alsoAdd1(function(x, y) { return x * y })
multiplyAndAdd1(2, 3)
doubleAndAdd1 = alsoAdd1(function(x) { return x * 2 })
doubleAndAdd1(2)

tripleAndAdd1 = alsoAdd1(function(x, y, z) {return x + y + z})
tripleAndAdd1(2)