let showAnswerBtn = document.getElementById('showAnswerBtn');
let correctBtn = document.getElementById('correctBtn');
let incorrectBtn = document.getElementById('incorrectBtn');

let flashcard = document.getElementById('flashcard');

let scoreValue = document.getElementById('scoreValue');

let flashcardArr = [];
let currentFlashcardIndex = 0;
let score = 0;

let answer = document.getElementById('answer');
let question = document.getElementById('question');


function addFlashcard(question, answer) {
    document.createElement('flashcardObj')
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