
function doBigCalculation () {
    const largeNumber = BigInt(1214124153250);
    const evenLargerNumber = BigInt(12321412513513510);
    debugger;
    return largeNumber + evenLargerNumber
    }
    let memoizedBigCalc = memoize(doBigCalculation);
    function calculation() {
      let result = memoizedBigCalc();
      console.log("Here is your giant ass calculation", result);
    }

