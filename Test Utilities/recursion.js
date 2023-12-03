function factorial(x) {
    debugger;
       if (x === 0) {
           return 1;
       }
       return x * factorial(x - 1);
   }
       let total = factorial(3);
       console.log(total);
   