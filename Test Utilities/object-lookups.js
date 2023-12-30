function giveTheMonkeySomethingToHold(thing) {
    var options = {
      'banana': 'a Banana',
      'telephone': 'a Telephone',
      'bourbon': 'a Bourbon',
      'nothing': 'nothing'
    };
    return `You gave the monkey ${(options[thing] || options['nothing'])} to hold!`;
  }
  
  let aStateMentAboutAMonkey = giveTheMonkeySomethingToHold('banana');
  
  console.log(aStateMentAboutAMonkey);
  // "You gave the monkey a Banana to hold!"