
// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7

const peopleArray = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ]


const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})
const peopleObject = arrayToObject(peopleArray, "id")
console.log(peopleObject[idToSelect])



// Google AI example

const people = [
    {
      name: "Gabe Thurau",
      age: 12,
      address: "8 Mile Road",
    },
    {
      name: "Augustus",
      age: 75,
      address: "123 Roman Way",
    },
  ];
  
  const fancyObjects = people.reduce((acc, obj) => {
    //console.log(acc)
    console.log(obj)
    acc[obj.name] = {
      name: obj.name,
      age: obj.age,
      address: obj.address,
    };
    return acc;
  }, {});




// https://www.redbitdev.com/post/using-array-reduce-with-objects

const users = [
    { id: 1, email: 'dcontreras@email.tld' },
    { id: 2, email: 'afeher@email.tld' },
    { id: 3, email: 'odj@email.tld' },
  ];
  
  const profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
  ];
  
  // Transform the profiles into an object keyed by the userId:
  const profilesByUserId = profiles.reduce((next, profile) => {
    const { userId } = profile;
    //console.log(next);
    //console.log(profile);
    //console.log([userId])
    console.log({...next, [userId]: profile});
    return { ...next, [userId]: profile };
  }, {});
  
  // profilesByUserId:
  // {
  //   1: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
  //   2: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
  //   3: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
  // }
  
  // Look up the profiles by id:
  const usersWithProfiles = users.map((user) => {
    return { ...user, profile: profilesByUserId[user.id] };
  });
  
  // usersWithProfiles:
  // [
  //   { id: 1, email: 'dcontreras@email.tld', profile: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' } },
  //   { id: 2, email: 'afeher@email.tld', profile: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' } },
  //   { id: 3, email: 'odj@email.tld', profile: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' } },

