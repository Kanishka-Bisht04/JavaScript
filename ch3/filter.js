// filter -> creates a new array of elements that give true for condition 
let arr = [1,,2,3,4,5,6];

let evenArr=arr.filter((val)=>{
return val % 2 ==0;
})
console.log(evenArr);