console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = []

function addItem(item){
    basket.push(item)
    return true;
}

function listItems(){
    console.log('Items in basket are:');
for (let i = 0; i<basket.length; i++) {
     console.log(basket[i]);
}
}

function empty(array) {
    array = []
    basket = array
    return true;

}