const numbers = [1, 2, 3, 4];

function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function addDollarSign(x) {
  return `${x}$`;
}

const result = numbers.map(compose(addDollarSign, String));
console.log(result); // ["1$", "2$", "3$", "4$"]