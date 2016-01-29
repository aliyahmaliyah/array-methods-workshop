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

//Write a function called longestWord that takes a string as argument, and returns 
//the longest word in the string. You should use Array.prototype.reduce to do your work.

function longestWord(string){
    var words = string.split(" ");
    return words.reduce(function(acc, next) {
    if (acc.length > next.length){
    return acc;
    }
    else {
    return next; 
    }
    })}
longestWord("Linguini eats avocados!");

//Write a function called countVowels that takes a string and returns the 
//number of vowels in the string. You should use Array.prototype.reduce to do your work.

var vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(string) {
    var split = string.split("");
    return split.reduce(function(acc,next){
        if (vowels.indexOf(next) > -1){acc++}
        return acc;
            },0);
}
countVowels("Linguini loves avocados!");
