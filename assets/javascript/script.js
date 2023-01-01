var score = 0
var highScore = localStorage.getItem("High Score");
var initials = localStorage.getItem("Player: ");
var finalScore = document.getElementById("finalScore");
var playerInitials = document.getElementById("playerInitials");
var playerScoreAndID = document.getElementById("playerScoreAndID");
var submitButton = document.getElementById("submitButton");
var rightAnswerMessage = document.getElementById("rightAnswerMessage");
var wrongAnswerMessage = document.getElementById("wrongAnswerMessage");
var secondsLeft = 60;
var remainingTime = document.getElementById("remainingTime");
var startQuiz = document.getElementById("startQuiz");
var startQuizButton = document.getElementById("startQuizButton");
var questions = document.getElementById("questions");
var questionHeader = document.getElementById("questionHeader");
var scoreScreen = document.getElementById("scoreScreen");
var correctAnswer