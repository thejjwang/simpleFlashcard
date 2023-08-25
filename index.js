let showAnswerBtn = document.getElementById('showAnswerBtn');
let correctBtn = document.getElementById('correctBtn');
let incorrectBtn = document.getElementById('incorrectBtn');
let makeFlashcardBtn = document.getElementById('makeFlashcardBtn');

let flashcard = document.getElementById('flashcard');
let makeFlashcardContainer = document.getElementById('makeFlashcardContainer');

let scoreValue = document.getElementById('scoreValue');

let flashcardArr = [];
let currentFlashcardIndex = 0;
let score = 0;

let answer = document.getElementById('answer');
let question = document.getElementById('question');

// on the MakeFlashcard btn  create 2 inputs and button for making flashcards
makeFlashcardBtn.addEventListener('click', () => {
    const inputQuestion = document.createElement('input');
    inputQuestion.id = 'userQuestion';
    inputQuestion.type = 'text';
    inputQuestion.placeholder = 'Enter Question';

    const inputAnswer = document.createElement('input');
    inputAnswer.id = 'userAnswer';
    inputAnswer.type = 'text';
    inputAnswer.placeholder = 'Enter Answer';

    const addButton = document.createElement('button');
    addButton.id = 'inputBtn';
    addButton.textContent = 'Add Flashcard';

    makeFlashcardContainer.appendChild(inputQuestion);
    makeFlashcardContainer.appendChild(inputAnswer);
    makeFlashcardContainer.appendChild(addButton);
    // on the button inside the makeflashcard call the addFlashcard with the input values
    addButton.addEventListener('click', () => {
        const ques = inputQuestion.value;
        const answ = inputAnswer.value;
        addFlashcard(ques, answ)
        // clear innerhtml to hide make flashcard input and button
        makeFlashcardContainer.innerHTML = "";
    })
});

function addFlashcard(question, answer) {
    const newFlashcard = {
        question: question, 
        answer: answer
    };
    flashcardArr.push(newFlashcard);
    console.log(newFlashcard);
    saveFlashcards();
}

function showNextFlashcard() {
    if (currentFlashcardIndex < flashcardArr.length) {
        
    }

}

function updateScore(isCorrect) {
    if (isCorrect == true) {
        score++;
    }
}
function saveFlashcards() {
    // flashcardArr to jsonstr
}
const loadFlashcards = async () => {
    try {
        const response = await fetch("http://localhost:3000/flashcards");
        const data = await response.json();
        console.log(data);
        flashcardArr.push(data);
        console.log(flashcardArr);
    } catch {
        console.log("error loading flashcards")
    }
}
// inital fetch for flashcard
loadFlashcards();

showAnswerBtn.addEventListener("click", toggleHidden);
function toggleHidden() {

}