let questionElement = document.querySelector('#question');
let optionsElement = document.querySelector(".options-container");
let nextButton = document.querySelector('.next-button');
let playAgainButton = document.querySelector('.play-again-button');

const questionsArr = [{
    question: "Which movie features a magical nanny who can fly with an umbrella?",
    options: [
        {text: "The Sound of Music", correct: false},
{text: "Beauty and the Beast", correct: false},
{text: "Mary Poppins", correct: true},
{text: "E.T. the Extra-Terrestrial", correct: false}
 ]
},
{
    question: "What is the largest species of shark?",
    options: [
        {text: "Great White Shark", correct: false},
        {text: "Hammerhead Shark", correct: false},
        {text: "Whale Shark", correct: true},
        {text: "Tiger Shark", correct: false }
    ]
},
{
    question: "Who is often referred to as the `Queen of Pop`?",
    options: [
        {text: "Lady Gaga", correct: false},
        {text: "Beyoncé", correct: false},
        {text: "Madonna", correct: true},
        {text: "Adele", correct: false }
    ]
},
{
    question: "What is the chemical symbol for gold?",
    options: [
        {text: "Ag", correct: false},
        {text: "Fe", correct: false},
        {text: "Au", correct: true},
        {text: "Hg", correct: false }
    ]
},
{
    question: "Which continent is known as the `Land Down Under`?",
    options: [
        {text: "Asia", correct: false},
        {text: "Africa", correct: false},
        {text: "Europe", correct: false},
        {text: "Australia", correct: true}
    ]
}]

let count = 0;
let score = 0;

function startQuiz(){
    count = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questionsArr[count];
    let questionNo = count + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option.text;
    button.classList.add('option-btn')
    optionsElement.appendChild(button);
    if(option.correct){
    button.dataset.correct = option.correct;
    }
    button.addEventListener("click", selectAnswer);
     })
}

function resetState(){
    nextButton.style.display = 'none';
    while(optionsElement.firstChild){
        optionsElement.removeChild(optionsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(optionsElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = 'block';
}

function showScore(){
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questionsArr.length}`;
nextButton.innerHTML = 'Play again';
nextButton.style.display = "block";
}
function handleNextButton(){
    count++;
if(count<questionsArr.length){
    showQuestion();
}
else{
    showScore();
}
}

nextButton.addEventListener('click', () => {
    if(count < questionsArr.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
