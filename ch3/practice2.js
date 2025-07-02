// Create an arrow function to perform the same task of (practice 1)
const arrowFunction = (a) =>{
    let count = 0;
    for (let i = 0; i<=a.length;i++){
        if (a[i] === 'a' || a[i] === 'e' || a[i] ==='i' || a[i] ==='o' || a[i] ==='u'){
            count++;
            console.log(a[i]);
        }
    }
    console.log("Number of vowels: ",count);

}
arrowFunction("kanishka");