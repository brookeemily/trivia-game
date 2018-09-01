// <!-- MAIN COMPONENTS NEEDED -->

// <!-- START BUTTON -->

// THIS IS THE TIMER

// Starts timer on load
//Variable for timer
var time = 0;
var currentQuestion = 0;


var converted = timeConverter(time);

$("#timer").text(converted);


  // Hide all content except start button
  $("#question").hide();
  $("#timer").hide();
  $("#results").hide();


//When you click the start button....
$("#start").click(function() {
  // Set timer
  time = 5;

  // Hide the start button
  $("#start").hide();


  // Begin timer
  start();
  count();

  // Display the first question
  displayQuestions();
  displayChoices();

});



// CREATE QUIZ

// var currentQuestion = 0;
var right = 0;
var wrong = 0;


// // Create an array that contains the questions & answers
var quizItems = [{
  question: "This is a question",
  
  // add sound to each question?

  choices: [
      "This is an answer",
      "This is an answer",
      "This is THE answer",
      "This is an answer"
]}
    
    ,{
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
      "This is an answe 5r",
      "This is THE answer 5",
      "This is an answer 5"
    ]
  }
];

// console.log(quizItems);
// console.log(quizItems[2].question);
// console.log(quizItems[3].choices);


function displayQuestions () {

// for (var i = 0; i < quizItems.length;) {
console.log(quizItems[currentQuestion].question);
$("#question").show();
$("#question").append(quizItems[currentQuestion].question);



 
// }

}


function displayChoices() {
  // for (var a = 0; a < quizItems.choices.length; a++) {

  console.log(quizItems[0].choices);
}

//write some JS to iterate over the js object and populate the html elements with the question data
// Use a for loop to move through that array when the game has started

// When the user selects an answer or when time is up, show the answer
// Show the answer for 15(?) seconds
// Go to the next question

// track state. You'll want to know how many questions the user has answered and what their answers were. 
// Again, I'd recommend setting up an object to track state and update it as you go.
    // { nextQuestion: 1, answers: [1,3,1,2] }

// Functions that display each question

// Show question 1
// function displayQuestions() {
  
//     for (i = 0; i < quizItems.length; i++) {
//       $("#question").empty();
//       $("#question").text(quizItems[i].question);
      
//         // console.log("quiz items " + quizItems[i].choices);
//         // console.log("quiz items " + quizItems[1].choices);

//     }
//   }



// function gameOver() {
//   stop();
//   submitAnswers();
//   $("#timer").hide();
//   $("#results").show();
//   $("#right").append(right);
//   $("#wrong").append(wrong);

//   $("#question5").hide();
//   $("#question1").hide();
//   $("#question2").hide();
//   $("#question3").hide();
//   $("#question4").hide();
// }
// // Resets when time hits 0
//    if (time === 0) {
//     stop();
//     time = 0;
//     $("#timer").empty();
//     $("#timer").append("TIME'S UP :~(");

//     $("#content").empty();
//     $("#content").append(
//       "this is where your results will appear! *change to the variable results*"
//     );
//   }

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
    stop();
    reset();
    start();
    currentQuestion++;
    console.log(quizItems[currentQuestion].question);
    $("#question").append(quizItems[currentQuestion].question);

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


//    // Check answers
//    if (q1 === answers[0]) {
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

// });

// GAME OVER PAGE
// if the time = 0, append results
//  use a foor loop for this
// display results
// replay //
