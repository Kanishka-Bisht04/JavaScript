// for a given array with prices of 5 items all items have an offer of 10% off on them . 
// change the array to store final price after applying offer

let items = [250,645,300,900,50];
let offer = 0.1; 
for (let dis of items){
    let finalprice = dis - (dis * offer);
    console.log(finalprice);
}