//prompt the user to enter the full name . Generate a username for them based on the input . 
// Start username with @, followed by their full name and ending with the fullname length
// eg: user = "kanishkabisht" , username should be = "@kanishkabisht13

let fullName = prompt("Enter your name");
let userName = "@"+fullName;
let userNameLength = fullName.length;
console.log("UserName is: ", userName+userNameLength);