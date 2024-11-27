// Algebra questions

// Q1: Create a function that takes two numbers as arguments and returns their sum.
// function addition(a,b){
//     return a+b;
// }

// console.log(addition(3, 2));  //➞ 5
// console.log(addition(-3, -6));  //➞ -9
// console.log(addition(7, 3));  //➞ 10

 

// Q2: Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// function increment(num){
//     return num+1;
// }

// console.log(increment(0)); //➞ 1
// console.log(increment(9)); //➞ 10
// console.log(increment(-3)); //➞ -2



// Q3: Create a function that takes the age in years and returns the age in days.
// function calcAge(num){
//     return num * 365;
// }

// console.log(calcAge(65)); //➞ 23725
// console.log(calcAge(0)); //➞ 0
// console.log(calcAge(20)); //➞ 7300



// Q:4 create a function for generate square of number
// function square(num){
//     return num * num;
// }

// console.log(square(5)); //➞ 25
// console.log(square(9)); //➞ 81
// console.log(square(100)); //➞ 10000



// Q5:Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points

// function footballPoints(wins, draws, losses){
//     return wins*3 + draws*1 + losses*0;
    
// }

// console.log(footballPoints(3, 4, 2)); //➞ 13
// console.log(footballPoints(5, 0, 2)); //➞ 15
// console.log(footballPoints(0, 0, 1)); //➞ 0





// Q6: Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// function calculator(expression) {
//     try {
//         // Evaluate the expression using JavaScript's built-in eval function
//         let result = eval(expression);
//         return result;
//     } catch (error) {
//         // Handle errors gracefully
//         return `Error: ${error.message}`;
//     }
// }

// // Examples
// console.log(calculator("23+4"));       // ➞ 27
// console.log(calculator("45-15"));      // ➞ 30
// console.log(calculator("13+2-5*2"));   // ➞ 5
// console.log(calculator("49/7*2-3"));   // ➞ 11




// Q7: Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// function divisible(num){
//     if(num % 100 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(divisible(1)); //➞ false
// console.log(divisible(1000)); //➞ true
// console.log(divisible(100)); //➞ true




// Q8: Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
// function area(height , width){
//     return height * width;
// }

// console.log(area(3, 4)); //➞ 12
// console.log(area(10, 11)); //➞ 110
// console.log(area(-1, 5)); //➞ -5
// console.log(area(0, 2)); //➞ -1




// Q9: Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
// function posCom(num){
//     return Math.pow(2,num);
// }

// console.log(posCom(1)); //➞ 2
// console.log(posCom(3)); //➞ 8
// console.log(posCom(10)); //➞ 1024




// Q10: Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

// function imposterFormula(i,p){
//     let result = Math.floor(100 * (i / p));
//     return result + "%";
// }

// console.log(imposterFormula(1, 10)); //➞ "10%"
// console.log(imposterFormula(2, 5)); //➞ "40%"
// console.log(imposterFormula(1, 8)); //➞ "13%"




// Q11: A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.

// function leapYear(num){
//     if( num % 4 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(leapYear(2020)); //➞ true
// console.log(leapYear(2021)); //➞ false
// console.log(leapYear(1968)); //➞ true




// Q12: Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
// Stack the Boxes
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// function stackBoxes(num){
//     return num * num;
// }

// console.log(stackBoxes(1)); //➞ 1
// console.log(stackBoxes(2)); //➞ 4
// console.log(stackBoxes(0)); //➞ 0





// Q13: Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
// The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.

// function howManyStickers(num){
//     return num * (num * 6);
// }
// console.log(howManyStickers(1)); //➞ 6
// console.log(howManyStickers(2)); //➞ 24
// console.log(howManyStickers(3)); //➞ 54





// Q14: The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(ati) {
//     return {
//         Needs: Math.floor(ati * 0.50),
//         Wants: Math.floor(ati*0.30),
//         Savings: Math.floor(ati*0.20),
//     };
// }
// console.log(fiftyThirtyTwenty(10000)); //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)); //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)); //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }





// Q15:Create a function that takes a positive integer n and returns the nth "star number".
// A star number is a centered figurate number that represents a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on. star numbers for 1, 2 and 3
// function starNumber(n){
//     return  6 * n *( n - 1 ) + 1;
// }

// console.log(starNumber(2)); //➞ 13
// // n = 2
// // 2nd star number = 13

// console.log(starNumber(3)); //➞ 37
// // n = 3
// // 3rd star number = 37

// console.log(starNumber(5)); //➞ 121
// // n = 5
// // 5th star number = 121





// Q16: Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// The function will be in this form:

// function equalSlices(total, num, each){
//     if(num * each <= total){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(equalSlices(11, 5, 2)); //➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices

// console.log(equalSlices(11, 5, 3)); //➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices

// console.log(equalSlices(8, 3, 2)); //➞ true
// console.log(equalSlices(8, 3, 3)); //➞ false
// console.log(equalSlices(24, 12, 2)); //➞ true





// Q17: Create a function that inverts the rgb values of a given tuple.
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.
function colorInvert(rgb) {
    if(!Array.isArray(rgb)|| rgb.length!=3){
        console.log("error occurs")
    }
    const inverted = rgb.map(value => 255-value);
    return inverted;
}

console.log(colorInvert([255, 255, 255])); //➞ [0, 0, 0]
console.log(colorInvert([0, 0, 0])); //➞ [255, 255, 255]
console.log(colorInvert([165, 170, 221])); //➞ [90, 85, 34]







































