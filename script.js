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

function footballPoints(wins, draws, losses){
    return wins*3 + draws*1 + losses*0;
    
}

console.log(footballPoints(3, 4, 2)); //➞ 13
console.log(footballPoints(5, 0, 2)); //➞ 15
console.log(footballPoints(0, 0, 1)); //➞ 0






