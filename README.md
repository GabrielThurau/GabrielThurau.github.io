# Gabe's Main Github Branch

## Check out some of my code

My name is Gabe Thurau. I'm from Saint Louis and moved to Phoenix around 5 years ago.
You'll mainly find me messing around with JS or React on here.

### I like a few things

* long walks on the beach
* vegan kombucha seltzer
* and I guess coding is ok

[Connect with me on LinkedIn](https://www.linkedin.com/in/gabriel-thurau/)

![Hackerman](https://media4.giphy.com/media/ieBWQkIVEELhbizGAp/giphy.gif)

Cool one liner from 30 Seconds of Code that I've found recently to reduce two arrays into an object.

```
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}

```
