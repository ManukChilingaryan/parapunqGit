// Beginner practice
 
// 1. Create a variable called carName, assign the value Volvo to it.

const carName = "Volvo";

// 2. Create a variable called years, assign the value 50 to it.

const years = 50;

// 3. Log the sum of 5 + 10, using two variables: x and y.

const x = 5;
const y = 10;
console.log(x + y);

// 4. Create a variable called z, assign x + y to it, and Log the result in console.

const z = x + y;
console.log(z);

// 5. On one single line, declare three variables with the following names and values: firstName = "John", lastName = "Doe", age = 35

const firstName = "John", lastName = "Doe", age = 35;

// 6. Create 2 variables, assign to them values 10 and 5, log to console the value of their multiplication.

const variable1 = 10;
const variable2 = 5;
console.log(variable1 * variable2);

// The Fortune Teller

// 1. Store the following into variables: number of children, partner 's name, geographic location, job title.

const childNum = 3;
const partnersName = "John";
const geoLoc = "Italy";
const job = "Software Test Automation Engineer";

// 2. Output your fortune to the screen like so: "You will be a X in Y, and married to with N kids."

const fortune = `You will be a ${job} in ${geoLoc}, and married to ${partnersName} with ${childNum} kids.`;
console.log(fortune);

//Data type practice

// 1. Set a variable equal to your favorite number and check the data type.

const favNum = 7;
console.log(typeof(favNum));

// 2. Then, create a new variable converting the previous variable to a string.Check the data type again.

const strFavNum = "" + favNum; //const strFavNum = String(favNum);
console.log(typeof(strFavNum));

// 3. Create a third variable, converting this string variable back to a number.Check the data type one more time.

const numStrFavNum = +strFavNum; //const numStrFavNum = Number(strFavNum);
console.log(typeof(numStrFavNum));

//Variables Practice

//1. Set a variable called someName equal to your name. Put your name in quotation marks.

let someName = "Meri";

//2. Display the value of someName in the console.

console.log(someName);

//3. Change the value of someName to your surname.

someName = "Nikolayan";

// 4. Set a variable called favoriteNumber equal to your favorite number.

const favoriteNumber = favNum;

// 5. Calculate what your favorite number divided by 2 is.

const divFavoriteNumber = favoriteNumber / 2;
console.log(divFavoriteNumber);

// 6. Set another variable called michaelsFavorite equal to 13.

let michaelsFavorite = 13;

// 7. Change the value of michaelsFavorite to 7.

michaelsFavorite = 7;

// 8. Subtract your favorite number after devision from the latest michaelsFavorite number.

console.log(michaelsFavorite - divFavoriteNumber);

//Type prediction
console.log(typeof(15)); //number
console.log(typeof(5.5)); //number
console.log(typeof(NaN)); //number
console.log(typeof("hello")); //string
console.log(typeof(true)); //boolean
console.log(typeof(1 != 2)); //boolean
console.log(typeof(2n)); //bigint

//Type conversions
console.log(Number(" 123 ")); //123
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(1/0); //infinity
console.log(1/'name'); //NaN
