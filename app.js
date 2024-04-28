// Question 1
//made a function maxarray to find the maxium product of the sub array
//used two loops to traverse through the array for each index
//using Math Library and built in method max to fing the maximun element
//decreasing the length of array by 1 as elements can not repeat
alert('QUESTION 1');
function maxarray(array, n) {
    var result = array[0];
    for (let i = 0; i < n; i++) {
        var mul = array[i];
        for (let j = i + 1; j < n; j++) {
            result = Math.max(result, mul);
            mul *= array[j];
        }

        result = Math.max(result, mul);
    }
    return result;
}

let array = [1, 2, 3, 0, 10, 7, 8];
let n = array.length;
alert('Array is: [ 1, 2, 3, 0, 10, 7, 8 ] ');
alert("Maximum array product = " + maxarray(array, n));

// -----------------------------------------------------------------------//
//Question 2
//made two arrays to traverse and compare the elements in the array
//add the elements to get target
//if found return the indexes of the elements
alert('QUESTION 2');
var twoArrayIndexes = function (numbers, target) {
    for (let i = 0; i <= numbers.length; i++) {
        for (let j = 0; j <= numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j]
            }
        }
    }
};
var targetToGet= int.parseFloat( prompt('input target to achieve:'));
alert(twoArrayIndexes([2, 7, 11, 15, 26], targetToGet));
//-------------------------------------------------------------------------------//
// Question 3
//reversed the string using bulit in function split
//reversed the array
//finally concat the string to display
alert('QUESTION 3');

function reverseString(str) {
    var splitString = str.split("");;
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};
strToConvert = prompt('Input string to convert: ').toString();
alert(reverseString(strToConvert));
//------------------------------------------------------//
// Question 4
// Displaying attributes for the given data by accessing elements(objects) in arrays
alert('QUESTION 4');

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true

    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
//made for loop for iterating through the array

library.forEach(lib => {

    if (lib.readingStatus === true) {
        alert('Reading status True :' + lib.title)
    }
    else if (lib.readingStatus === false) {
        alert('Reading Status False: ' + lib.title)
    }
});

// for (i=1; i< library.length; i++){
// console.log( 'Title: '+ library.title[i] + '\n Author: '+ library.title[i]+'Currently Reading:'+ library.readingStatus[i]);
// };
//------------------------------------------------------------------------------------//


// Question 5 //
//check the condition first if the amount is null or zero so return nothing
//subrtacting the hardcoded values for the coins(from the array) from the amount and storing
//ending until amount reaches 0

alert('QUESTION 5');

function amountToCoinsConversion(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            remain = (amount - coins[0]);
            return [coins[0]].concat(amountToCoinsConversion(remain, coins));
        } else {
            coins.shift();
            return amountToCoinsConversion(amount, coins);
        }
    }
};

amountToConvert = parseFloat(prompt('Enter amount to convert: '));
alert(amountToCoinsConversion(amountToConvert, [5000, 1000, 500, 100, 50, 10, 5, 2, 1]));
//--------------------------------------------------------------------------//