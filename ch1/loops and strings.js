/*
let sum =0;
for(let i=0 ; i<5;i++){
    sum+=i;
}
console.log(sum);

//while loop
let i = 20;
while(i<=10){
    console.log(i);
    i++;
}


//do-while loop
let j = 20;
do{
    console.log(j);
    j++;
}while(j<=10);



//for of loop  --> used in array and strings 

let str = "Kanishka Bisht";
let size =0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("Size : ",size);


*/
// for in loop --> it returns object keys

let student ={
    name: "Rahul",
    cgpa: 8.5,
    dept: "Cse",
    isPass: "True"
};

for(let key in student){
    console.log("Keys: ",key, "Value: ",student[key]);
}



// Strings 

//Template literals : It is a special way to create strings using backticks (`) instead of quotes (" or '), and it lets you:

                            //a.Insert variables or expressions directly into strings
                            //b.Write multi-line strings easily

// or we can say it is a way to have embedded expressions in strings

let specialString = `this is a template literal`;
console.log(specialString);
console.log(typeof(specialString));


//String Interpolation: create strings by doing substitution of placeholders.

let obj={
    item: "pen",
    price: 25,
    brand: "cello"
};

console.log(`the cost of ${obj.item} is ${obj.price}`);