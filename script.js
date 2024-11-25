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

function imposterFormula(i,p){
    let result = Math.floor(100 * (i / p));
    return result + "%";
}

console.log(imposterFormula(1, 10)); //➞ "10%"
console.log(imposterFormula(2, 5)); //➞ "40%"
console.log(imposterFormula(1, 8)); //➞ "13%"
