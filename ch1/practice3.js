alert("Student Report Card");

let a = prompt("Enter your marks (0-100)");

a = Number(a); // Convert string to number

if(a >= 90 && a <= 100){
    console.log("O Grade");
}
else if(a >= 80 && a < 90){
    console.log("A Grade");
}
else if(a >= 70 && a < 80){
    console.log("B Grade");
}
else if(a >= 60 && a < 70){
    console.log("C Grade");
}
else if(a >= 50 && a < 60){
    console.log("D Grade");
}
else if(a >= 40 && a < 50){
    console.log("E Grade");
}
else if(a >= 33 && a < 40){
    console.log("Pass Grade");
}
else if(a >= 0 && a < 33){
    console.log("Fail");
}
else{
    console.log("Invalid input. Please enter a number between 0 and 100.");
}
