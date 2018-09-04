// <!-- MAIN COMPONENTS NEEDED -->

// <!-- START BUTTON -->

// THIS IS THE TIMER

// Starts timer on load
//Variable for timer
var time = 0;
var currentQuestion = 0;

var playerAnswers = [];

var converted = timeConverter(time);

var correctAnswers = ["This is THE answer", "This is THE answer 2", "This is THE answer 3", "This is THE answer 4", "This is THE answer 5"];

// CREATE QUIZ

// var currentQuestion = 0;
var right = 0;
var wrong = 0;

// // Create an array that contains the questions & answers
var quizItems = [
  // {
  //   question: "placeholder",
  //   choices: ["placeholder", "placeholder", "placeholder", "placeholder"]
  // },
  {
    question: "This is a question",

    // add sound to each question?

    choices: [
      "This is an answer",
      "This is an answer",
      "This is THE answer",
      "This is an answer"
    ]
  },
  {
    question: "This is a question 2",
    // add sound to each question?
    choices: [
      "This is an answer 2",
      "This is an answer 2",
      "This is THE answer 2",
      "This is an answer 2"
    ]
  },
  {
    question: "This is a question 3",
    // add sound to each question?
    choices: [
      "This is an answer 3",
      "This is an answer 3",
      "This is THE answer 3",
      "This is an answer 3"
    ]
  },
  {
    question: "This is a question 4",
    // add sound to each question?
    choices: [
      "This is an answer 4",
      "This is an answer 4",
      "This is THE answer 4",
      "This is an answer 4"
    ]
  },
  {
    question: "This is a question 5",
    // add sound to each question?
    choices: [
      "This is an answer 5",
      "This is an answer 5",
      "This is THE answer 5",
      "This is an answer 5"
    ]
  }
];

$("#timer").text(converted);

// Hide all content except start button
$("#question").hide();
$("#timer").hide();
$("#choices").hide();

function gameOver() {
  $("#question").hide();
  $("#timer").hide();
  $("#results").hide();
  $("#choices").hide();
}
// console.log(quizItems);
// console.log(quizItems[2].question);
// console.log(quizItems[3].choices);

function displayQuestions() {
  // for (var i = 0; i < quizItems.length;) {

  if (currentQuestion >= 0) {
    $("#question").show();
    $("#question").html(quizItems[currentQuestion].question);
    // console.log(quizItems[currentQuestion].question);
    // console.log(currentQuestion);
    
}
}

function displayChoices() {
  // for (var a = 0; a < quizItems.choices.length; a++) {
  $("#choices").show();
  $("#choice1").html(quizItems[currentQuestion].choices[0]);
  $("#choice2").html(quizItems[currentQuestion].choices[1]);
  $("#choice3").html(quizItems[currentQuestion].choices[2]);
  $("#choice4").html(quizItems[currentQuestion].choices[3]);

  if (currentQuestion > 5) {
    gameOver();
  }

  // if you click on a choice, push value to new array

  // }
}

function pickAnswer() {
  $("#choice1").click(function() {
    // console.log(choice1);
    playerAnswers.push(quizItems[currentQuestion].choices[0]);
    console.log("player answers: " + playerAnswers);

    checkAnswers();

    currentQuestion++;
    nextQuestion();
  
  });

  $("#choice2").click(function() {
    // console.log(choice2);
    playerAnswers.push(quizItems[currentQuestion].choices[1]);
    console.log("player answers: " + playerAnswers);
  
    checkAnswers();
    
    currentQuestion++;
    nextQuestion();
  });

  $("#choice3").click(function() {
    // console.log(choice3);
    playerAnswers.push(quizItems[currentQuestion].choices[2]);
    console.log("player answers: " + playerAnswers);
  
    checkAnswers();
    
    currentQuestion++;
    nextQuestion();

  });

  $("#choice4").click(function() {
    // console.log(choice4);
    playerAnswers.push(quizItems[currentQuestion].choices[3]);
    console.log("player answers: " + playerAnswers);
 
    checkAnswers();
    
    currentQuestion++;
    nextQuestion();

  });
}



// TIMER FUNCTIONS

// Reset function for timer
function reset() {
  // Start time at 30 seconds
  time = 5;
  $("#timer").text("00:05");
  $("#question").empty();
  $("#answers").empty();
}

// Function starts timer
function start() {
  intervalId = setInterval(count, 1000);
  $("#timer").show("0:05");
}

// Function stops timer
function stop() {
  console.log("stopping");
  clearInterval(intervalId);
}

// Makes the timer count time
function count() {
  time--;
  var converted = timeConverter(time);
  $("#timer").text(converted);

  // if (time === 0) {
  //   stop();
  //   reset();
  //   start();
  //   displayQuestions();
  // }
  if (time === 0) {
    nextQuestion();
  }
}

// Converts timer
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

function nextQuestion() {
  if (currentQuestion <= 4) {
    displayQuestions();
    displayChoices();
    console.log(currentQuestion);
  } else {
    gameOver();
  }
}

//When you click the start button....
$("#start").click(function() {
  // Set timer
  time = 5;

  // Hide the start button
  $("#start").hide();

  // Begin timer
  // start();
  // count();
  // Display the first question
  pickAnswer();

  displayQuestions();
  displayChoices();
  nextQuestion();

});


function checkAnswers () {
//    // Check answers
if (playerAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
    console.log("correct :)");
    right++;
    console.log("right " + right);
}
if (playerAnswers[currentQuestion] !== correctAnswers[currentQuestion]) {
    console.log("incorrect :(");
    wrong++;
    console.log("wrong " + wrong);
  }
}


//   // FIGURE OUT HOW TO SEE IF THEY MISSED QUESTIONS
//   // if (q1 === null) {
//   //     alert("question missed!");

//   // }

//   if (q2 === answers[1]) {
//     console.log("question2 correct!");
//     right++;
//   }
//   if (q2 !== answers[1]) {
//     console.log("question2 incorrect :(");
//     wrong++;
//   }

//   if (q3 === answers[2]) {
//     console.log("question3 correct!");
//     right++;
//   }
//   if (q3 !== answers[2]) {
//     console.log("question3 incorrect :(");

//     wrong++;
//   }
//   if (q4 === answers[3]) {
//     console.log("question4 correct!");
//     right++;
//   }
//   if (q4 !== answers[3]) {
//     console.log("question4 incorrect :(");
//     wrong++;
//   }

//   if (q5 === answers[4]) {
//     console.log("question5 correct!");
//     right++;
//   }
//   if (q5 !== answers[4]) {
//     console.log("question5 incorrect :(");
//     wrong++;
//   }
// }
// );

// function checkAnswers() {
//   // Check answers
//   if (q1 === answers[0]) {
//     console.log("question1 correct!");
//     right++;
//   }
//   if (q1 !== answers[0]) {
//     console.log("question1 incorrect :(");
//     wrong++;
//   }
//   // FIGURE OUT HOW TO SEE IF THEY MISSED QUESTIONS
//   // if (q1 === null) {
//   //     alert("question missed!");

//   // }

//   if (q2 === answers[1]) {
//     console.log("question2 correct!");
//     right++;
//   }
//   if (q2 !== answers[1]) {
//     console.log("question2 incorrect :(");
//     wrong++;
//   }

//   if (q3 === answers[2]) {
//     console.log("question3 correct!");
//     right++;
//   }
//   if (q3 !== answers[2]) {
//     console.log("question3 incorrect :(");

//     wrong++;
//   }
//   if (q4 === answers[3]) {
//     console.log("question4 correct!");
//     right++;
//   }
//   if (q4 !== answers[3]) {
//     console.log("question4 incorrect :(");
//     wrong++;
//   }

//   if (q5 === answers[4]) {
//     console.log("question5 correct!");
//     right++;
//   }
//   if (q5 !== answers[4]) {
//     console.log("question5 incorrect :(");
//     wrong++;
//   }
// }

// // Check if answer for each question is correct

// if ( === correct
//     // right++
// // if player one !== correct
//     // wrong++



// GAME OVER PAGE
// if the time = 0, append results
//  use a foor loop for this
// display results
// replay //
