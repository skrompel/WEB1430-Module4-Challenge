/*

Author: Sahara Krompel
Date: 7 June 2025
Purpose: Console-based quiz

*/

"use strict";

const quiz = [
  { question: "What is the correct syntax to print a message to the console in JavaScript?\n" +
    "A. print(\"Hello World\")\n" +
    "B. echo(\"Hello World\")\n" +
    "C. console.log(\"Hello World\")\n" +
    "D. println(\"Hello World\")\n", 
    answer: "C" },
  { question: "What keyword is used to define a function in JavaScript?\n" +
    "A. define\n" +
    "B. function\n" +
    "C. func\n" +
    "D. method\n", 
    answer: "B" },
  { question: "Which method adds an element to the end of an array in JavaScript?\n" +
    "A. push()\n" +
    "B. shift()\n" +
    "C. pop()\n" +
    "D. unshift()\n", 
    answer: "A" }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {

  try {
    let userInput = prompt(quiz[i].question + "\nYour answer (A, B, C, or D):");

    if (userInput === null) {
      console.log("Quiz exited.");
      break;
    }

    const answer = userInput.trim().toUpperCase();

    if (!["A", "B", "C", "D"].includes(answer)) {
      console.log("Invalid input. Please enter A, B, C, or D only.");
      i--;
      continue;
    }

    let nextQuestion = i + 1;
    if (answer === quiz[i].answer) {
      console.log("Question " + nextQuestion + ": Correct!\n");
      score++;
    } else {
      console.log("Question " + nextQuestion + ": Wrong. Correct answer is " + quiz[i].answer);
    }
  } catch(error) {
      console.error("An unexpected error occurred:", error.message);
      break; 
  }
  
}

console.log("Your score: " + ((score/quiz.length) * 100).toFixed(2) + "%");