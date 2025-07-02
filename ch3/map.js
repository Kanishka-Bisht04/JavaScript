// Some more array method
// map() - creates a new array with the results of some operation.
//the value its callback returns are used to form new array

let arr = [1,2,3,4,5];
arr.map((val) =>{
    console.log(val);
})


// creation of new array
let newArr=arr.map((val) =>{
    return val *2;
})

console.log(newArr);
