const numbers = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < numbers.length; i++){
    
    if(numbers[i]>3){
        break; // if condition is true break will stop loop on the point and Never going forward.
    }
    console.log("break", numbers[i]);
}
// if condition is true continue will ignore that element  going forward the loop.
const nums = [1,-2,3,4,-5,-6,7,-8,9];
for(let i = 0; i < nums.length; i++){
    if(nums[i]<0){
        continue;
    }
    console.log("continue", nums[i]);
}