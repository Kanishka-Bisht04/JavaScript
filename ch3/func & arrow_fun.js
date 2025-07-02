function myFunction(msg){
    //parameter --> input ( which is used in func defi )
    // it acts like a local variable which stays awake till blocks
    console.log("Hello");
}
myFunction("I love Js"); //argument (which is used in func calling)


//sum function
function sum(a,b){
    return a+b;
}

//compact way of writing fuctions ==> Arrow Function

//const functionName = (param1,param2...)=>{
    //code
//}


// recreating sum function 

(a,b) =>  {
    console.log(a+b);
} // it will not execute beacuse to execute it we need to store it in the variable

const arrow = (a,b) =>  {
    console.log(a+b);
}// now it will execute

arrow(3,4);



