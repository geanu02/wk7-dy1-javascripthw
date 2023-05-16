// Homework

// Complete the Following Coding Questions in JavaScript.

// Question #1

// Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

// hint: filter, includes

// for information on includes see:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

var dogNames = ["Max", "Fido", "Gizmo", "Nala"];

// Answer #1
const checkDogNames = (sentence, dogNames) => {
  const noPunc = sentence.replace(/[,!]/g, "").split(" ");
  return noPunc.filter((word) => dogNames.includes(word));
};

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!";
//Expect ['Max']
console.log(checkDogNames(testString1, dogNames));

let testString2 = "My Dog is fast, her name is Tippi";
//Expect []
console.log(checkDogNames(testString2, dogNames));

let testString3 = "Come here Fido and Gizmo come here";
//Expect['Fido','Gizmo']
console.log(checkDogNames(testString3, dogNames));

// Question #2

// Write a Function using map to convert an array of number from inches to feet

// 1 foot = 12 inches

// Answer #2
const convertToFeet = (arr) => arr.map((num) => num / 12);

const heightsInInches = [66, 64, 60, 52, 72, 80, 51];

console.log(convertToFeet(heightsInInches));

// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]

// Question #3

// Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

// Answer #3
const isEatingPizza = (arr) =>
  arr.map((a) =>
    a.endsWith("o") ? `${a} is eating pizza` : `${a} is being rude`
  );

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];

console.log(isEatingPizza(tmnt));
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]

// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max Function.

// The List will be all positive numbers

// Answer #4
const maxNum = (arr) => arr.sort((a, b) => b - a)[0];

let findAMax = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49];

console.log(maxNum(findAMax));
//Expect
// 234125

// Question #5

// At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

var bingo = "B-I-N-G-O";
var ognib = "";
for (let i = bingo.length - 1; i >= 0; i--) {
  ognib += bingo[i];
  //define state from this line on the third iteration
  // Answer #5
  if (i == bingo.length - 1 - 3) {
    console.log(bingo);
    console.log(ognib);
    console.log(i);
  }
}
//bingo value is B-I-N-G-O

//ognib value is O-G-

// i value is 5

// Question #6

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link here to the 3 questions you completed

// 1: Quadrants 8kyu - https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

const quadrant = (x, y) => { 
  if (x < 0) {
    if (y < 0) {
      return 3;
    } else {
      return 2;
    }
  } else {
    if (y < 0) {
      return 4;
    } else {
      return 1;
    }
  }
}

// 2: Pig Latin 5kyu - https://www.codewars.com/kata/520b9d2ad5c005041100000f

function isAlphaNumeric(str) {
    let code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

const pigIt = str => {
    let txt = str.split(' ')
    let _txt = ""
    for (let i of txt) {
        if (isAlphaNumeric(i)) {
            _txt += `${i.slice(1,i.length)}${i.charAt(0)}ay `
        } else {
            _txt += i
        }
    }
    return _txt.trim()
}

// 3: Multiples of 3 or 5 6kyu - https://www.codewars.com/kata/514b92a657cdc65150000006

const solution = num => {
    let _sum = 0
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            _sum += i
        }
    } 
    return _sum
}