// basic conditional


let foo = 1;
let bar;
if (foo === 1) bar = 'one';
else if (foo === 2) bar = 'two';
else if (foo === 3) bar = 'three';
else foo = 'unknown';

// translated to a nested ternary

let foo = 1;
let bar = foo === 1 ? 'one' : foo === 2 ? 'two' : foo === 3 ? 'three' : 'unknown';


let foo = 3;
const bar = foo > 1 ? foo > 2 ? 'foo is actually pretty great'
: 'at least foo is greater than 1'
: 'foo is not so great after all'





const something = condition ? nested_condition ? value_if_both_conditions_are_true
: value_if_nested_condition_is_false 
: value_if_condition_is_false;