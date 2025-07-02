// take a number n as input from user. Create an array of number from 1 to n. 
// use the reduce method to calculate sum of all numbers in the array. 
// use the reduce method to calculate product of all numbers in the array.

let n =prompt("Enter a number: ");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum =arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sum);
let pro =arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(pro);