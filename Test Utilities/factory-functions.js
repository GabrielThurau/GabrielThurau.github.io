const createBird = () => ({
    hasWings: true,
  })
  
  const createFish = () => ({
    hasFins: true,
  })

  const createFlyer = () => ({
    canFly: true,
    fly(vx, vy, vz) {
      // Do something with the velocities
    },
  })
  
  const createSwimmer = () => ({
    canSwim: true,
    swim(vx, vy, vz) {
      // Do something with the velocities
    },
  })

  const createHawk = () => ({
    ...createBird(),
    ...createFlyer(),
  })
  
  const createPenguin = () => ({
    ...createBird(),
    ...createSwimmer(),
  })
  
  const createFlyingFish = () => ({
    ...createFish(),
    ...createFlyer(),
    ...createSwimmer(),
  })




  function createProduct (name, id, price) {
    const productName = name;
    const productID = id;
    const productPrice = price ; 
    return { productName, productID, productPrice };
  }




  function createQueue() {
    // Create an array in closure. This is a private variable.
    const queue = []
  
    // This could have been a private method, if we didn't also want to expose it
    // Notice how simple this is to understand. No need for `this`
    const isEmpty = () => queue.length === 0
  
    return {
      enqueue(x) {
        queue.push(x)
      },
      dequeue() {
        return queue.shift()
      },
      peek() {
        if (isEmpty()) return undefined
        return queue[queue.length - 1]
      },
      get length() {
        return queue.length
      },
      isEmpty,
    }
  }
  
  const queue1 = createQueue()