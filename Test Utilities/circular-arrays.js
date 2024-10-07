const arr = ['a', 'b', 'c']
const i = 5 //index you wanna access
const n = arr.length

arr[(i % n + n) % n] // => 'c'

//At the end it works as if: 
//['a', 'b', 'c', 'a', 'b', 'c', 'a', ...♾]
//  0    1    2    3    4    5    6   ...♾