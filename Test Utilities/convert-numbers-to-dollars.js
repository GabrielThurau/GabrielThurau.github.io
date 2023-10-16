const numbers = [1, 2, 3, 4];

function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function addDollarSign(x) {
  return `$${x}`;
}

const result = numbers.map(compose(addDollarSign, String));
console.log(result);





// Function composition cheat sheet. Bunch of examples curated from the interwebs


const compose = (...args) => (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Increment passed number
const inc = (n) => n + 1;

// Doubles the passed value
const double = (n) => n * 2;

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
  





// example
const add2        = (n) => n + 2;
const times2      = (n) => n * 2;
const times2add2  = compose(add2, times2);
const add6        = compose(add2, add2, add2);

times2add2(2);  // 6
add2tiems2(2);  // 8
add6(2);        // 8



// We call our function c2, short for 'compose two functions together'.
const c2 = (funcA, funcB) => x => funcA(funcB(x));