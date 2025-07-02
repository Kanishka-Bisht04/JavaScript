// reduce performs some operations and reduce the array to a single value . it returns that single value 
let arr = [1,,2,3,4,5,6];

const output = arr.reduce((Res,cur) =>{
    return res+cur;
});
console.log(output);