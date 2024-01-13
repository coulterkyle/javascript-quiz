//questions for the test
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "&ltscript&gt", correct: true },
            { text: "&ltscripting&gt", correct: false },
            { text: "&ltjs&gt", correct: false },
            { text: "&ltjavascript&gt", correct: false },
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alert('Hello World');", correct: true },
            { text: "msgBox('Hello World');", correct: false },
            { text: "alertBox('Hello World');", correct: false },
            { text: "msg('Hello World');", correct: false },
        ]
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            { text: "if (i <> 5)", correct: false },
            { text: "if (i != 5)", correct: true },
            { text: "if i <> 5", correct: false },
            { text: "if i =! 5 then", correct: false },
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i = 0; i <= 5)", correct: false },
            { text: "for i = 1 to 5", correct: false },
            { text: "for (i = 0; i <= 5; i++)", correct: true },
            { text: "for (i <= 5; i++)", correct: false },
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: "Comment: This is a comment", correct: false },
            { text: "'This is a comment'", correct: false },
            { text: "This is a comment:>", correct: false },
            { text: "//This is a comment", correct: true },
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            { text: "rnd(7.25)", correct: false },
            { text: "Math.rnd(7.25)", correct: false },
            { text: "Math.round(7.25)", correct: true },
            { text: "round(7.25)", correct: false },
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.ceil(x, y)", correct: false },
            { text: "Math.max(x, y)", correct: true },
            { text: "top(x, y)", correct: false },
            { text: "ceil(x, y)", correct: false },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseover", correct: false },
            { text: "onclick", correct: true },
            { text: "onchange", correct: false },
            { text: "onmouseclick", correct: false },
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "=", correct: true },
            { text: "*", correct: false },
            { text: "X", correct: false },
            { text: "-", correct: false },
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: [
            { text: "true", correct: true },
            { text: "NaN", correct: false },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
        ]

    }
];

let currentQuestionIndex = 0;
let score = 0;

//names variables
const startButton = document.getElementById('start-button')
const displayQuestion = document.getElementById('question')
const answerButtons = document.getElementById('answers')

//event listener that calls the startQuiz function on 'click'
startButton.addEventListener("click", startQuiz)

function setTimer() {
    let sec = 60;
    var timer = setInterval(function () {
        document.getElementById('timer').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
};

function displayQuestions() {
    let currentQuestion = questions[currentQuestionIndex]
    displayQuestion.innerHTML = currentQuestion.question
    
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);
    });
}


function startQuiz() {
    const welcome = document.getElementById('welcome');
    const quiz = document.getElementById('test')
    welcome.classList.add('hide');
    quiz.classList.remove('hide')
    setTimer()
    displayQuestions()
}