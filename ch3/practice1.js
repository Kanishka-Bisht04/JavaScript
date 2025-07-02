// create a function using the "function" keyword that takes a string as an argument
//  & returns the number of vowels in the string.

function countVowels(a){
    let count = 0;
    for (let i = 0; i<=a.length;i++){
        if (a[i] === 'a' || a[i] === 'e' || a[i] ==='i' || a[i] ==='o' || a[i] ==='u'){
            count++;
            console.log(a[i]);
        }
    }
    console.log("Number of vowels: ",count);

}
countVowels("Kanishka");