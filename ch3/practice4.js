// for a given array of numbers , print the square of each value using the forEach loop.

let arr = [1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num*num);
})


// another way

let calcSquare = (num) =>{
    console.log(num * num);
};

arr.forEach(calcSquare);

