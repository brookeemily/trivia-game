// <!-- MAIN COMPONENTS NEEDED -->

// <!-- START BUTTON -->

// THIS IS THE TIMER

// Starts timer on load
//Variable for timer

var time = 5;
var results;


var converted = timeConverter(time);
$("#timer").text(converted);

// Display when page loads
window.onload = function() {
  // Hide all content except start button
  $("#quiz").hide();

  $("#timer").hide();
  $("#results").hide();
};

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
  displayQ1();
  $("#quiz").show();


});

// CREATE QUIZ

// // Create an array that contains the questions & answers
// var quiz = [
//   {
//     question: "This is a question",
//     // add sound to each question?
//     choices: [
//       "This is an answer",
//       "This is an answer",
//       "This is THE answer",
//       "This is an answer"
//     ]
//   },
//   {
//     question: "This is a question",
//     // add sound to each question?
//     choices: [
//       "This is an answer",
//       "This is an answer",
//       "This is THE answer",
//       "This is an answer"
//     ]
//   },
//   {
//     question: "This is a question",
//     // add sound to each question?
//     choices: [
//       "This is an answer",
//       "This is an answer",
//       "This is THE answer",
//       "This is an answer"
//     ]
//   },
//   {
//     question: "This is a question",
//     // add sound to each question?
//     choices: [
//       "This is an answer",
//       "This is an answer",
//       "This is THE answer",
//       "This is an answer"
//     ]
//   },
//   {
//     question: "This is a question",
//     // add sound to each question?
//     choices: [
//       "This is an answer",
//       "This is an answer",
//       "This is THE answer",
//       "This is an answer"
//     ]
//   }
// ];

// Use a for loop to move through that array when the game has started

// When the user selects an answer or when time is up, show the answer
// Show the answer for 15(?) seconds
// Go to the next question

// Functions that display each question

// Show question 1
function displayQ1() {
  // Display question 1
  $("#quiz").show();
  $("#question1").show();
  //Hide other questions
  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();
  $("#question5").hide();

  console.log("showing first q");

  // if time hits zero, go to next question
}

// Show question 2
function displayQ2() {
  // Display question 1
  $("#quiz").show();
  $("#question2").show();

  //Hide other questions
  $("#question1").hide();
  $("#question3").hide();
  $("#question4").hide();
  $("#question5").hide();

  // if time hits zero, go to next question
}

// Show question 3
function displayQ3() {
  // Display question 1
  $("#quiz").show();
  $("#question3").show();

  //Hide other questions
  $("#question1").hide();
  $("#question2").hide();
  $("#question4").hide();
  $("#question5").hide();

  // if time hits zero, go to next question
}

// Show question 4
function displayQ4() {
  // Display question 1
  $("#quiz").show();
  $("#question4").show();

  //Hide other questions
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#question5").hide();

  // if time hits zero, go to next question
}

// Show question 5
function displayQ5() {
  // Display question 1
  $("#quiz").show();
  $("#question5").show();

  //Hide other questions
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();

  // if time hits zero, go to next question
}

function gameOver() {
  stop();
  submitAnswers();
  $("#timer").hide();

  $("#results").show();
  $("#right").append(right);
  $("#wrong").append(wrong);

  $("#question5").hide();
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();
}
// Resets when time hits 0
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

    if (($('#question1').is(':visible')) && (time <= 0)) {
      console.log("time's up");
          stop();
          reset();
          start();
          count();
          displayQ2();

      }

      if (($('#question2').is(':visible')) && (time <= 0)) {
          console.log("time's up");
              stop();
              reset();
              start();
              count();
              displayQ3();

          }

          if (($('#question3').is(':visible')) && (time <= 0)) {
              console.log("time's up");
                  stop();
                  reset();
                  start();
                  count();
                  displayQ4();

              }

              if (($('#question4').is(':visible')) && (time <= 0)) {
                  console.log("time's up");
                      stop();
                      reset();
                      start();
                      count();
                      displayQ5();

                  }

              if (($('#question5').is(':visible')) && (time <= 0)) {
                  console.log("time's up");
                  console.log("game's over");
                  console.log("right: " +  right + "//" + "wrong: " + wrong)
                      stop();
                      reset();
                      start();
                      count();
                      gameOver();
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


// <!-- QUIZ QUESTIONS -->

// When you click on the submit button
$("#submit").click(function() {
  // Get user input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  var answers = ["a", "c", "a", "d", "b"];

// //   checkAnswers();
// // }

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
// }});

});
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
