
console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
//defining ages array and consoling

console.log("a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.");

let math = ages[ages.length-1] - ages[0];
console.log(math);
//defining variable math to subtract first index from last index of the array

console.log("b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)");

ages.push(16);
console.log(ages);
math = ages[ages.length-1] - ages[0]
console.log(math);
//pushing the new age 16 to the array ages, consoling ages to make sure 16 is added, set the new value of math variable and then consoling to get new result

console.log("c. Use a loop to iterate through the array and calculate the average age.");

var sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);
//declare variable sum to 0 to get the sum off all the elements in the array using a for loop, then outside the loop use the sum divided by the lenght of the array to give us the average, then console the average to make sure it's correct


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.");

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//declared names as a variable to an array

console.log("a. Use a loop to iterate through the array and calculate the average number of letters per name.");

let letters = 0;

for (let i = 0; i < names.length; i++) {
  letters += names[i].length;
}
let averageLetters = letters / names.length;
console.log(averageLetters);
//declared a variable of letters to 0, then created a for loop to get total letters in the array through all the names which was 23, then divided the amount of letters by the length to get the average

console.log("b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");

var iterateNames = 0;
for (let i = 0; i < names.length; i++) {
    iterateNames += names[i];
    names.join();
    console.log(names.join(' '));
}
//delcared a variable iterateNames, ran a for loop to go through each name, on each name i joined the names and joined spaces in between the names and consoled the result of each iteration


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("3. How do you access the last element of any array?");

console.log("(array.length - 1) will give us the last element in an array");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("4. How do you access the first element of any array?");

console.log("array[0] - 0 is the first index in an array this will give us the first element")


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

let nameLengths = [];
var lengthSum = 0;

for (let i = 0; i < names.length; i++) {    
    nameLengths.push(lengthSum += names[i].length);
}

console.log(nameLengths)
//created empty array with declared variable, declared variable lengthSum at 0, ran a for loop to push the length of each name to the nameLengths array until the loop completed


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

var sumOfLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfLength += nameLengths[i];
}

console.log(sumOfLength);
//created variable sumOfLength set to 0, ran a for loop to go through each number and added it the previous number, then consoled the sum 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");

let repeatThisWord = (word,n) => word.repeat(n);
console.log(repeatThisWord("hello", 3));
//using string.repeat(count), this allows me to repeat a string input in the first parameter and in the second parameter the number of how many time to repeat


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Andres", "Garnica"))
//wrote an arrow function with firstName and lastName parameters that returned a template literal and called the function with my own name to make sure it worked



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

const array = [10, 20, 30, 50];
const sumOfNumbers = array.reduce((sum, num) => (sum + num)); 

function isGreaterThan(totalAmountOfArray) {
    return totalAmountOfArray > 100
}

console.log(isGreaterThan(sumOfNumbers));
//first declared an array with values totaling over 100, set variable setOfNumbers and used reduce() to get sum of array, declared a function that returned true or false with the sum of the array


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");

const newArray = [10, 20, 30, 50, 60];
const newSum = newArray.reduce((sum, num) => (sum + num));

const newAverage = (sumOfArray, arrayLength) =>  sumOfArray / arrayLength.length;

console.log(newAverage(newSum, newArray));
//used the reduce() method to add sum of the newArray of numbers like we did in question 9, set variable newSum to that total and wrote a function to get sum divided by the length of the array by using array.length 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

const newArray1 = [10, 20, 30, 40];
const newArray2 = [1, 2, 3, 4];

const sumArray1 = newArray1.reduce((sum, num) => (sum + num));
const sumArray2 = newArray2.reduce((sum, num) => (sum + num));

function twoArrays(sum1, sum2, lngth1, lngth2) {
    let avgArray1 = sum1 / lngth1.length;
    let avgArray2 = sum2 / lngth2.length;
    return avgArray1 > avgArray2;
}
 
console.log(twoArrays(sumArray1, sumArray2, newArray1, newArray2));
//first declared 2 array variables, then used reduce method to add sum off arrays seperately, then used function to first get average of both arrays seperately, then returned if first array is greater than second array


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink (isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 12));
//delcared function that return true if it is hot ouside and money is greater than 10.50 and consoled result


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");

function calcTax (x, y) {
    let percent = x / 100;
    let percentOfNumber = percent * y;
    return `${x}% of ${y} is ${percentOfNumber}`;
}

// console.log(calcTax(prompt('Enter percentage'), prompt('Enter number you want to take percentage of')));

//made a function that got a percent of a number where it had prompt you to put your own number to put a percentage