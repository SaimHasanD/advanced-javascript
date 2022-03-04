// if var value not declared
let num;
console.log(num);
// if not using return in the function  
function add(num1, num2){
    console.log(num1 + num2);
    return 
}
const result = add(10,12);
console.log(result);

// if parameter not declared 
function adding(num1, num2){
    console.log(num1, num2);
}

const results = adding(10);
console.log(results);

// if object value not found
const student = {name:"smart dude", phone:458421};
console.log(student.roll);

// if var value = undefined, usually not recommended to do this
let fun = undefined;
console.log(fun);

// if console.log in object of a array which on is not defined 
let ages = [2, 5, 9]
console.log(ages[11]);

// null = not existent, usually u have to set null,if need null in output