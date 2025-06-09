/*

Author: Sahara Krompel
Date: 7 June 2025
Purpose: Console-based quiz

*/

"use strict";

// Quiz Data
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


// Main function to run the quiz
function runQuiz() {
  let score = 0; // Track correct answers

  for (let i = 0; i < quiz.length; i++) {

    try {
      // Prompt user for input
      let userInput = prompt(quiz[i].question + "\nYour answer (A, B, C, or D):");

      if (userInput === null) {
        console.log("Quiz exited.");
        break;
      }

      const answer = userInput.trim().toUpperCase();

      // Validate input (must be A–D)
      if (!["A", "B", "C", "D"].includes(answer)) {
        console.log("Invalid input. Please enter A, B, C, or D only.");
        i--; // Re-ask the same question
        continue;
      }

      // Process and compare the answer
      let nextQuestion = i + 1;
      if (answer === quiz[i].answer) {
        console.log("Question " + nextQuestion + ": Correct!\n");
        score++;
      } else {
        console.log("Question " + nextQuestion + ": Wrong. Correct answer is " + quiz[i].answer);
      }
    } catch(error) {
        // Catches any unexpected errors during processing
        console.error("An error occured:", error.message);
        break; 
    }
    
  }

  // Quiz completed, show final score
  console.log("Your score: " + ((score/quiz.length) * 100).toFixed(2) + "%");

  try {
    // Ask user if they want to restart
    let restart = prompt("Would you like to restart the quiz? (yes/no)");

    // Handle cancel or empty input
    if (restart === null || restart.trim() === "") {
      console.log("No response. Exiting quiz.");
      return;
    }

    // Restart if user says yes
    if (restart.trim().toLowerCase().startsWith("y")) {
      console.clear(); // Clear console for clean restart
      runQuiz(); // Restart quiz
    } else {
      console.log("Thanks for playing!");
    }

  } catch (error) {
    // Handle any unexpected error during restart prompt
    console.error("⚠️ Error while checking restart option:", error.message);
  }
}

runQuiz();