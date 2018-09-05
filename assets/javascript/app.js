// <!-- MAIN COMPONENTS NEEDED -->

// <!-- START BUTTON -->

// THIS IS THE TIMER

// Starts timer on load
//Variable for timer
var time = 0;
var currentQuestion = 0;

var playerAnswers = [];

var converted = timeConverter(time);
var audioElement = document.createElement("audio");


var correctAnswers = [
  "I set my clocks early 'cause I know I'm always late", 
  "Why don't you show me that little bit of spine you've been saving for his mattress?", 
  "A teenage vow in a parking lot, ’Til tonight do us part", 
  "A loaded god complex, cock it and pull it", 
  "I'm the leading man, and the lies I weave are oh, so intricate, oh, so intricate"
];

var gifs = ["assets/images/alittleless.gif","assets/images/dancedance.gif","assets/images/hum.gif","assets/images/sugar.gif","assets/images/thisaintascene.gif",];
var correctGifs = ["assets/images/yay.gif", "assets/images/celebrate.gif", "assets/images/good.gif", "assets/images/clap.gif", "assets/images/yup.gif"];
var incorrectGifs = ["assets/images/nope.gif", "assets/images/nah.gif", "assets/images/no.gif", "assets/images/incorrect.gif", "assets/images/wrong.gif" ];
var audio = ["assets/audio/16candles.m4a","assets/audio/dance.m4a","assets/audio/hum.m4a","assets/audio/sugar.m4a","assets/audio/arms.m4a",]
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
    question: "What's the lyric from 'A Little Less Sixteen Candles, A Little More Touch Me?'",

    // add sound to each question?

    choices: [
"I send my cards early 'cause I know I'm always late",
"I set my clocks early 'cause I know I'm always late",
"My salmon comes early cause I know I’m always late",
"Send the cops early cause you know I’m always late"    ]
  },
  {
    question: "What's the lyric from Dance Dance?",
    // add sound to each question?
    choices: [
      "Why don't you show me the little bit of spark you've been saving for his mattress?",
      "Why don't you show me that little bit of spine you've been saving for his mattress?",
     "Why don't you show me, that little bit of spunk you've been saving for his bed arrest?",
    "Why don’t you show me, little British toy you've been staying for his mattress?"
    ]
  },
  {
    question: "What's the lyric from Hum Hallelujah?",
    // add sound to each question?
    choices: [
      "A teenager in a parking lot, 'Til tonight, she was bored",
      "A teenage love in a parking lot, 'Til tonight do us part",
      "A teenager in a parking lot, ’Til tonight, she was poor",
      "A teenage vow in a parking lot, ’Til tonight do us part"
    ]
  },
  {
    question: "What's the lyric from Sugar We're Goin Down?",
    // add sound to each question?
    choices: [
      "A loaded god complex, cock it and pull it",
      "I know you got cornflakes, cocky and bullied",
      "A loaded gun complex, cock it and pull it",
      "A lollipop complex, cook it in puddin'"
    ]
  },
  {
    question: "What's the lyric from This Ain't a Scene, It's an Arms Race?",
    // add sound to each question?
    choices: [ 
      "I'm a lying man and the lies I weaveare oh, so intricate, oh, so intricate",
      "I'm a little man, and I'm also evil, also into cats, also into cats.",      
      "I'm the leading man, and the lies I weave are oh, so intricate, oh, so intricate",
      "I'm not leaving man and the lives I leave are also in Japan, also in Japan"
     
    ]
  }
];

$("#timer").text(converted);

// Hide all content except start button
$("#question").hide();
$("#timer").hide();
$("#choices").hide();
$("#next").hide();
$("#game-over").hide();


function gameOver() {
  $("#question").hide();
  $("#timer").hide();
  $("#results").hide();
  $("#choices").hide();
  $("#game-over").show();
  $("#gif").html("<img src=assets/images/nice.gif"  + " width='400px'>");

  $("#right").text("Correct: " + right);
  $("#wrong").text("Inorrect: " + wrong);

}
// console.log(quizItems);
// console.log(quizItems[2].question);
// console.log(quizItems[3].choices);

function displayQuestions() {
  // for (var i = 0; i < quizItems.length;) {

  if (currentQuestion >= 0) {
    $("#question").show();
    $("#gif").show();
    displayImage();
    audioElement.setAttribute("src", audio[currentQuestion]);
    audioElement.play();


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

    stop();
    reset();
     
    checkAnswers();
    showAnswer();
  
  });

  $("#choice2").click(function() {
    // console.log(choice2);
    playerAnswers.push(quizItems[currentQuestion].choices[1]);
    console.log("player answers: " + playerAnswers);
    stop();
    reset();

    checkAnswers();
    showAnswer();

  });

  $("#choice3").click(function() {
    // console.log(choice3);
    playerAnswers.push(quizItems[currentQuestion].choices[2]);
    console.log("player answers: " + playerAnswers);
    
    stop();
    reset();

    checkAnswers();
    showAnswer();


  });

  $("#choice4").click(function() {
    // console.log(choice4);
    playerAnswers.push(quizItems[currentQuestion].choices[3]);
    console.log("player answers: " + playerAnswers);
 
    stop();
    reset();

    checkAnswers();
    showAnswer();

  });
}

function displayImage() {
  $("#gif").html("<img src=" + gifs[currentQuestion] + " width='400px'>");
}

// TIMER FUNCTIONS

// Reset function for timer
function reset() {
  // Start time at 30 seconds
  time = 45;
  $("#timer").text("00:45");
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

  if (time === 0) {
    stop();
    reset();
    playerAnswers.push("too slow!");
    console.log(playerAnswers);

    showAnswer();
  }
  
}

// function timeForAnswer () {
//   count();


//   if (time === 0) {
//     nextQuestion ();
//   }
// }

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
  if (currentQuestion <= 5) {
    reset();
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
  time = 45;

  // Hide the start button
  $("#start").hide();
  $("#timer").show();

  // Begin timer
  start();
  count();
  // Display the first question
  pickAnswer();

  displayQuestions();
  displayChoices();
  // nextQuestion();

});

$("#restart").click(function() {
// Set timer
document.location.reload(true);


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

function showAnswer () {


  $("#timer").hide();
  $("#question").hide();
  $("#choices").hide();
  $("#answer").show();
  $("#next").show();
  $("#result").show();
  $("#description").show();



  if (playerAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
    $("#gif").html("<img src=" +   correctGifs[currentQuestion] + " width='400px'>");
    // items[Math.floor(Math.random()*items.length)];

    $("#result").html("CORRECT!");
  $("#description").html("this is the description!");
  }
if (playerAnswers[currentQuestion] !== correctAnswers[currentQuestion]) {
  $("#gif").html("<img src=" +   incorrectGifs[currentQuestion] + " width='400px'>");


  $("#result").html("INCORRECT! :(");
  $("#description").html("this is the description!");

  }


 
// }

//   $("#timer").hide();

//   time = 3
//   start();


//   if (time === 0) {
//     $("#timer").show();

//     $("#answer").hide();
//     $("#result").hide();
//     $("#next").hide();

//       start();
//        displayQuestions();
//         displayChoices();
//   }

  

currentQuestion++;
console.log(currentQuestion);
  // currentQuestion++;
  // nextQuestion();

}

$("#next").click(function() {
  $("#timer").show();

  $("#answer").hide();
  $("#result").hide();
  $("#next").hide();

  if (currentQuestion < 5) {  
  start();
   displayQuestions();
    displayChoices();
}
else {
  gameOver();
}

});


// GAME OVER PAGE
// if the time = 0, append results
//  use a foor loop for this
// display results
// replay //
