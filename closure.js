// If you execute a function inside a function,
// a closure is created. Closure could return a function.
// Closure saves the states of outer function variable (private variable),
// but do not expose them. In this way, you can hide implementation details using a closure.
// This is called encapsulation.
function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());