//forEach loop in arrays  --> or we can call it as higher order function / methods 
// (the functions which either take another function as a parameter or return another function)

// arr.forEach(callBackFunction)
//CallbackFunction : Here , it is a function to execute for each elements in the array
// this function is passed as an argument to another function.

// arr.forEach((val)) => {
//    console.log(val);
//}

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
})

// with the help of arrow function 

arr.forEach((val) => {
    console.log(val);
})

