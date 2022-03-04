const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result =  numbers.map(function(element){
//     return element * element;
// })

// map can use 3 parameter(element,element.length,array). map output show as a array
const result = numbers.map(x => x * x);

// filter output as a array, its filter the array to remove something
const bigger = numbers.filter( x => x < 4);

// find give output not like a array, it's give just one element.
const isThere = numbers.find(x => x > 6);

console.log(bigger);