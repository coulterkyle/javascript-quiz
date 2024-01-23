//questions for the test
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<script>", },
            { text: "<scripting>" },
            { text: "<js>" },
            { text: "<javascript>" },
        ], answerText: "<script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alert('Hello World');" },
            { text: "msgBox('Hello World');" },
            { text: "alertBox('Hello World');" },
            { text: "msg('Hello World');" },
        ], answerText: "alert('Hello World');"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            { text: "if (i <> 5)" },
            { text: "if (i != 5)" },
            { text: "if i <> 5" },
            { text: "if i =! 5 then" },
        ], answerText: "if (i != 5)"
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i = 0; i <= 5)" },
            { text: "for i = 1 to 5" },
            { text: "for (i = 0; i <= 5; i++)" },
            { text: "for (i <= 5; i++)" },
        ], answerText: "for (i = 0; i <= 5; i++)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: "Comment: This is a comment" },
            { text: "'This is a comment'" },
            { text: "This is a comment:>" },
            { text: "//This is a comment" },
        ], answerText: "//This is a comment"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            { text: "rnd(7.25)" },
            { text: "Math.rnd(7.25)" },
            { text: "Math.round(7.25)" },
            { text: "round(7.25)" },
        ], answerText: "Math.round(7.25)"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.ceil(x, y)" },
            { text: "Math.max(x, y)" },
            { text: "top(x, y)" },
            { text: "ceil(x, y)" },
        ], answerText: "Math.max(x, y)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseover" },
            { text: "onclick" },
            { text: "onchange" },
            { text: "onmouseclick" },
        ], answerText: "onclick"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "=" },
            { text: "*" },
            { text: "X" },
            { text: "-" },
        ], answerText: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: [
            { text: "true" },
            { text: "NaN" },
            { text: "false" },
            { text: "undefined" },
        ], answerText: "true"

    }
];

//sets global variables
// let currentQuestionIndex = 0;
// let score = 0;
let playerScore = []

//names variables from elements of html
const welcome = document.getElementById('welcome');
const startButton = document.getElementById('start-button')
const quiz = document.getElementById('test')
const displayQuestion = document.getElementById('question')
const answerButtons = document.getElementById('answers')
const inputBox = document.getElementById('input-box')
const submitButton = document.getElementById('submit-answer')
// const recordScore = document.getElementById('record')
// const recordHeader = document.getElementById('record-header')
const submitScore = document.getElementById('submit-score')
const scorePage = document.getElementById('scores')
const tryAgain = document.getElementById('try-again')
let sec;
let currentQuestionIndex = 0;
let score = 0;
let time;
//event listener that calls the startQuiz function on 'click'
startButton.addEventListener("click", startQuiz)

//starts quiz by revealing 'test', starts timer and displays questions
function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;

    welcome.classList.add('hide');
    quiz.classList.remove('hide')
    setTimer()
    displayQuestions()

}

//timer with set interval function - if time runs out, runs end quiz
function setTimer() {
    sec = 59;
    time = setInterval(function () {
        document.getElementById('timer').innerHTML = sec;
        sec--;
        if (sec <= -1) {
            endQuiz()
          
            // clearInterval(timer)
            // endQuiz();
        }

    }, 1000);
};
// setTimer()

//function that produces question and answer buttons by cycling through the array
function displayQuestions() {
    // console.log(currentQuestionIndex)
    resetQuestion();
    let currentQuestion = questions[currentQuestionIndex]
    displayQuestion.innerHTML = currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);
    });
    answerButtons.addEventListener('click', handleSubmit)

}


//Clears previous answers so that new answer buttons can be produced
function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//event listener that calls the handle submit function
// answerButtons.addEventListener('click', handleSubmit)

//function that increases the score if an answer is correct, subtracts time if incorrect and ends quiz
//when the questions are completed
function handleSubmit(event) {
    var clickBtn = event.target.textContent
    if (clickBtn === questions[currentQuestionIndex].answerText) {
        score++
    } else {
        sec -= 10
    }

    if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        displayQuestions();
    } else {
        clearInterval()
        endQuiz()
    }
}


function endQuiz() {
    // timer.classList.add('hide');
    // recordScore.classList.remove('hide')
    clearInterval(time)
    resetQuestion()
    let scoreBoard = (score * 10)
    let timescore = (59 - sec)
    let playerScore = {scoreBoard, timescore}
    displayQuestion.innerHTML = `All Done!\n You scored ${scoreBoard}% in ${timescore} seconds`

    let recordHeader = document.createElement('h3')
    recordHeader.textContent = 'ENTER YOUR INITIALS:'
    recordHeader.classList.add('record-header')
    inputBox.appendChild(recordHeader)

    let recorder = document.createElement("input");
    // recorder.textContent = answer.text;
    recorder.classList.add("initials");
    inputBox.appendChild(recorder)
    var initials = recorder.value.trim();
    // console.log(initials)

    let submitScore = document.createElement("button");
    submitScore.textContent = 'Submit';
    submitScore.classList.add("submit-score");
    inputBox.appendChild(submitScore)
    submitScore.addEventListener('click', () => {
        var initials = recorder.value.trim();
        playerScore.initials = initials
        console.log(initials,playerScore)
        var previousScore = JSON.parse(localStorage.getItem("CodeQuiz") )|| []
        previousScore.push(playerScore)
        localStorage.setItem("CodeQuiz", JSON.stringify(previousScore))
        showScore()
    })
}




function showScore() {
    quiz.classList.add('hide')
    scorePage.classList.remove('hide');
    var OldScore = JSON.parse(localStorage.getItem("CodeQuiz")) || []
    var previousScore = []
    for(let i=0;i<OldScore.length;i++){
        for(let j=0;j<OldScore.length-1;j++){
            if(OldScore[i].scoreBoard > OldScore[j].scoreBoard){
                let temp = OldScore[i]
                OldScore[i] = OldScore[j]
                OldScore[j] = temp
            }
        }
    }
    previousScore = OldScore
    var highScores = document.getElementById("high-scores")
    var htmlCode =""
    for (i=0; i<previousScore.length; i++){
        htmlCode += `<li>${previousScore[i].initials}</li><ol><li>ScoreBoard: ${previousScore[i].scoreBoard}</li>
        <li>TimeScore: ${previousScore[i].timescore}</li></ol>`
    }
    console.log(previousScore)
    highScores.innerHTML = htmlCode
    // var initialsForm = document.getElementById('initials');
    // var initials = initialsForm.value.trim();
    // console.log(initials)
}
//}

tryAgain.addEventListener('click', () => {
    resetTest()
    startQuiz()
})

function resetTest() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild)
    }
    scorePage.classList.add('hide')
}
