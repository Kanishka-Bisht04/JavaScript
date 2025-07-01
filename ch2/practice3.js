// Create an array to store companies 
// a. Remove the first company from the array
// b. Remove Uber & add ola in its place 
// c. Add amazon at the end

let companiesNames = ["Bloomberg", "Microsoft", "Uber","Google","IBM","Netflix"];
console.log("Companies before deletion: ",companiesNames);
companiesNames.shift();
console.log("Companies after deletion: ",companiesNames);

companiesNames.splice(1,1,"Ola");
console.log("Companies after adding Ola: ",companiesNames);

companiesNames.push("Amazon");
console.log("Companies after adding Amazon: ",companiesNames);