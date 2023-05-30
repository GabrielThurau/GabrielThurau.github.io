
// The goal of this code snippet is to search through a list of options in a dropdown and remove any duplicates.
// Bug in their liquid code meant that a bunch of different devices were being repeated through the dropdown.
// Hacky fix to remove those duplicates as an option in the main dropdown

// 1. First Step is to select the correct drop down menu and the options that are direct children of this element. 
// This is the culprit of the bug. The others aren't fucking up. 


const mainDropdown = document.querySelector('[data-option="option2"]');
let allOptions = mainDropdown.querySelectorAll('option');


// 2. Loop through the dropdown and push the nodelist into an array.
// check if the value exists. If it does, only push the first index where it's found. If not, then remove the option from the array.


textArr = [];
allOptions.forEach(function(option) {
  if(textArr.indexOf(option.value) > -1) {
    option.remove();
  }
  else {
    textArr.push(option.value);
  }
});