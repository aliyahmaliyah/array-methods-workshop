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

//Write a function called highLow that takes an array of numbers, and returns an object 
//with a property highest containing the highest number, and a property lowest containing 
//the lowest number, using Array.prototype.reduce

function highLow(array) {
       return array.reduce(function(acc, number){
            if (number > acc.highest) {
                acc.highest = number;
            }
            if (number < acc.lowest) {
                acc.lowest = number;
            }
            return acc;
    },{highest: -Infinity, lowest: Infinity}); 
}
highLow(myArray);

//Write a function called highLowTwo that takes an array of numbers, and returns 
//the higest, second highest, lowest, and second lowest numbers.

function highLowTwo(array) {
       return array.reduce(function(acc, number){
            if (number > acc.highest) {
                acc.secondHighest = acc.highest
                acc.highest = number;
            }
            else if(number > acc.secondHighest){
                acc.secondHighest = number
            }
            if (number < acc.lowest) {
                acc.secondLowest = acc.lowest;
                acc.lowest = number;
            }
            else if (number < acc.secondLowest){
                acc.secondLowest = number
            }
            return acc;
    },{highest: -Infinity, secondHighest: -Infinity,lowest: Infinity, secondLowest: Infinity}); 
}
console.log(highLowTwo(myArray));
