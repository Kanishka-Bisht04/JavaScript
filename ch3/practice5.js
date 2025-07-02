// we are given an array of marks of students . Filter out of the marks of students that scored 90 and 90+.

let arr=[56,76,98,93,24,87,90,76];
const Num=arr.filter((val)=>{
    return val >= 90;
})
console.log(Num);