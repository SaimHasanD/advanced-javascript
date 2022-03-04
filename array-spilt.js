const nums = [1,2,3,4,5,6,7,8];

// take some value to a array,  Array<number>.slice(start?: number, end?: number): number[] (+1 overload)
const part = nums.slice(2, 5);

// remove value from array , and is't can add some value in those place. Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
const removed = nums.splice(2,3, 77);
console.log(removed);
console.log(nums);

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
const together = nums.join("  ")
console.log(together);