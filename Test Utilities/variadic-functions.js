function variadicStringify(...args) {
    for (arg of args) {
      console.log(arg)
    }
    }



    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("one"), 1000);
      });
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("two"), 2000);
      });
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("three"), 3000);
      });
      const p4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("four"), 4000);
      });
      const p5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("five"), 5000);
      });

      


      async function doPromiseThing(...promises) {
       await Promise.all([...promises])
        .then((values) => {
        console.log(values);
        })
        .catch((error) => {
        console.error(error.message);
        });
      }





      let storeProducts = [];
      let fetchCalls = [];
      let ceailedCount = 1; 
      for (let i =1 ; i <= ceailedCount; i++ ){
        fetchCalls.push(fetch(`/products.json/?limit=250&page=${i}`))
      }
      Promise.all(fetchCalls)
      .then(m => m.forEach(s => {
        let k = s.json();
        k.then( s => { storeProducts.push(s.products) })
      }
      )).then( j => console.log('process Completed',storeProducts ));







      function sleep(ms) {
        return new Promise(r => setTimeout(r, ms))
      }
      async function count(p) {
        const n = await p
        console.log(n)
        if (n >= 10) return "done"
        await sleep(1000)
        return count(n + 1)
      }
      count(Promise.resolve(0)).then(console.log, console.error)

      


      async loadStuff(url) {
        const items = await fetch(url).then(res => res.json());
        const folders = items.filter(item => item.isFolder);
        const files = items.filter(item => !item.isFolder);
        const childFiles = await Promise.all(folders.map(
            folder => loadStuff(folder.url)
        ));
        // loadStuff returns an array, therefore
        // childFiles is an array of arrays, so we flatten it
        return [...files, ...childFiles.flat()];
    }
   

// Logs:
// "reject"