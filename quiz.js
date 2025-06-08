/*

Author: Sahara Krompel
Date: 7 June 2025
Purpose: Console-based quiz
Citations: https://nodejs.org/api/readline.html

*/

"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  { question: "What is the correct syntax to print a message to the console in JavaScript?\n" +
    "A. print(\"Hello World\")\n" +
    "B. echo(\"Hello World\")\n" +
    "C. console.log(\"Hello World\")\n" +
    "D. println(\"Hello World\")", 
    answer: "console.log(\"Hello World\")" },
  { question: "What keyword is used to define a function in JavaScript?"
    , 
    answer: "function" },
  { question: "Which method adds an element to the end of an array in JavaScript?", 
    answer: "push()" }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].question);
  if (userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Incorrect! The correct answer was ");
  }
}

console.log(`Your score: ${score}/${questions.length}`);