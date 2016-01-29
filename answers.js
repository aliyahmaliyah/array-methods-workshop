// Write a function called printPositives that takes an array and uses its forEach 
//method to print only the positive numbers.

var myArray = [1,-1,2,-24,3,31];

var findPos = myArray.forEach(function newArray(number){
    if (number > 0) {
        console.log (number);
}});
findPos;

//write a function called getPositives that takes an array and uses its filter method 
//to return a new array with only the positive numbers

myArray.filter(function getPositives(number) {
    if (number > 0) {
        console.log (number);
        }
});

//Write a function called filterArray that takes an array AND a function as arguments. 
//Your filter function should return a new array that contains only the elements where 
//the passed function returns a truthy value.

function filterArray(array, fn) {
    return array.filter(fn);
}
function fn(number) {
    if (number) {
        return number;
    }
}

filterArray(myArray, fn);

