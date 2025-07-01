// for a given array with marks of students.Find the average marks of entire class

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let number of marks){
    console.log(number);
    sum += number;
    
}
console.log(sum/marks.length);