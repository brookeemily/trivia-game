// <!-- MAIN COMPONENTS NEEDED -->


// <!-- START BUTTON -->

// THIS IS THE TIMER

// Starts timer on load
window.onload = function() {
  start();
  count();
}

//Variable for timer
var time = 30;

// Reset function for timer
function reset() {

// Start time at 0
  time = 30;
  $("#timer").text("0:30");

}

// Function starts timer
function start() {
  intervalId = setInterval(count, 1000);
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
  
  }
  

  // Converts timer
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  

  // <!-- QUIZ QUESTIONS -->


// When you click on the submit button
// $("#submit").click(function() {
function submitAnswers(){
    
    var total = 5;
    var right = 0;
    var wrong = 0;


    // Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;


    // Set correct answers (create an array that contains the correct answers for each question)
    var answers =["a", "c", "a", "d", "b"];

    // Check answers
    if (q1 === answers[0]) {
        alert("question1 correct!");
        right++;
        alert(right);
    }  if (q1 !== answers[0]) {
        alert("question1 incorrect :(");
        wrong++;
       alert(wrong);
    }  
    // FIGURE OUT HOW TO SEE IF THEY MISSED QUESTIONS
    // if (q1 === null) {
    //     alert("question missed!");

    // }
    
    if (q2 === answers[1]) {
        alert("question2 correct!");
        right++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    }  if (q2 !== answers[1]) {
        alert("question2 incorrect :(");
        wrong++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    } 
    
    if (q3 === answers[2]) {
        alert("question3 correct!");
        right++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    }  if (q3 !== answers[2]) {
        alert("question3 incorrect :(");
        wrong++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    }  
    if (q4 === answers[3]) {
        alert("question4 correct!");
        right++;
        alert("wrong: " + wrong);
       alert("right: " + right);
    }  if (q4 !== answers[3]) {
        alert("question4 incorrect :(");
        wrong++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    }  

    if (q5 === answers[4]) {
        alert("question5 correct!");
        right++;
        alert("wrong: " + wrong);
        alert("right: " + right);
    }  if (q5 !== answers[4]) {
        alert("question5 incorrect :(");
        wrong++;
       alert("wrong: " + wrong);
       alert("right: " + right);
    }  
} 
// // Check if answer for each question is correct

// if ( === correct 
//     // right++
// // if player one !== correct
//     // wrong++



// });


// GAME OVER PAGE
// if the time = 0, go to the game over page
    //  use a foor loop for this
// display results
// replay //