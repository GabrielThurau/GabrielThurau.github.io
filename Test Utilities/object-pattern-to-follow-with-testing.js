const animalMethods = {
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    },
    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    },
    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  }
  
  function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play
  
    return animal
  }
  
  const leo = Animal('Leo', 7)
  const snoop = Animal('Snoop', 10)


  class Programmer {
    constructor(...args) {
   const [ occupation ]  = args; // set this to a dynamic argument instead for a realistic use-case
    }
    code() {
      console.log('typing on keys in hopes that things will just magically work');
    }
  };

  class JuniorProgrammer extends Programmer {
     code() {
        super.code();
        console.log('...and breaks the site in the process.');
     }
  }

  const juniorProgrammer = new JuniorProgrammer();

  juniorProgrammer.code();