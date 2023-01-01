//Global Variables
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
var rightAnswer = "";
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var answer4 = document.getElementById("option4");
//I've looked at the word answer so long it doesn't look like a word anymore.
var questionIndex = 0;
var questionList = [
    {
        heading: "How many scripts can you have in one document?",
        option1: "0",
        option2: "3",
        option3: "10",
        option4: "As many as you want",
        rightAnswer: "As many as you want"
    },
    {   
        heading: "What do you use to separate JavaScript statements?",
        option1: "!",
        option2: ".",
        option3: ";",
        option4: "nothing",
        rightAnswer: ";"
    },
    {
        heading: "How do you declare a variable?",
        option1: "var",
        option2: "variable",
        option3: "vari",
        option4: "You don't need to",
        rightAnswer: "var"
    },
    {
        heading: "Inside which element do we put the JavaScript",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<java>",
        rightAnswer: "<script>"
    },
    {
        heading: "How do you call a function named sampleFunction",
        option1: "call sampleFunction",
        option2: "function sampleFunction",
        option3: "call function: sampleFunction()",
        option4: "sampleFunction()",
        rightAnswer: "sampleFunction()"
    },
    {
        heading: "You have completed all the questions before time ran out! Well done!",
    }
];

var activeQuestion = questionList[questionIndex];
// Spent 30 minutes wondering why the button wouldn't work and it was bcuz I had typed "Click" instead of "click" in the event listener ( ._.)
startQuizButton.addEventListener("click", advancePage);
questions.style.display = "none";
scoreScreen.style.display = "none";

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        remainingTime.textContent = secondsLeft + " seconds left!"
        if(secondsLeft === 0 || questionIndex === 5) {
            clearInterval(timerInterval);;
            questions.style.display = "none"
            scoreScreen.style.display = "block";
            finalScore.textContent = "Total points: " + score;
            function addHighScore() {
                var initials = document.getElementById("playerInitials").value;
                var node = document.createElement("li");
                var textnode = document.createTextNode(initials + " " + score + " points") ;
                node.appendChild(textnode);
                document.getElementById("playerScoreAndID").appendChild(node);
                localStorage.setItem("High Score ", score);
                localStorage.setItem("Player: ", initials);
            }
            submitButton.addEventListener("click", addHighScore);
        }
    }, 1000);
}
function verifyAnswer() {
    console.log("Correct Answer: ", questionList[questionIndex].rightAnswer);
    console.log("You chose: ", this);
    console.log(this.textContent);
    if(questionList[questionIndex].rightAnswer === this.textContent){
        score += 20;
        console.log(score);
        var correctTimeout = setTimeout(
            rightAnswerMessage.textContent = "Correct!", 1000);
            clearTimeout(correctTimeout);
    } else {
        secondsLeft -= 10;
        rightAnswerMessage.textContent = "Wrong, 10 seconds removed from the remaining time!"
    }
    if (questionIndex === questionList.length -1) {
        questionHeader.style.display = "none";
        scoreScreen.style.display = "block";
        finalScore.textContent = "Total points: " + score;
        return;
    } else {
        activeQuestion = questionList[questionIndex += 1];
        showQuestion();
    }
}
function showQuestion() {
    activeQuestion.heading
    console.log(activeQuestion.heading);
    questionHeader.textContent = activeQuestion.heading;
    console.log(activeQuestion.choice1, activeQuestion.choice2, activeQuestion.choice3, activeQuestion.choice4);
    answer1.textContent = activeQuestion.option1;
    answer2.textContent = activeQuestion.option2;
    answer3.textContent = activeQuestion.option3;
    answer4.textContent = activeQuestion.option4;

    answer1.addEventListener("click", verifyAnswer);
    answer2.addEventListener("click", verifyAnswer);
    answer3.addEventListener("click", verifyAnswer);
    answer4.addEventListener("click", verifyAnswer);
    console.log(secondsLeft + " seconds left");
    console.log("you are on question #" + (questionIndex +1))
};
function advancePage() {
    console.log("click")
    startQuiz.style.display = "none";
    questions.style.display = "block";
    showQuestion();
    setTimer();
}
