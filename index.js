let showAnswerBtn = document.getElementById('showAnswerBtn');
let correctBtn = document.getElementById('correctBtn');
let incorrectBtn = document.getElementById('incorrectBtn');

let flashcard = document.getElementById('flashcard');

let scoreValue = document.getElementById('scoreValue');

let flashcardArr = [];
let currentFlashcardIndex = 0;
let score = 0;

function addFlashcard(question, answer) {
    document.createElement('flashcardObj')
}

function showNextFlashcard() {


}

function updateScore(isCorrect) {
    if (isCorrect == true) {
        score++;
    }
}
function saveFlashcards() {
    // flashcardArr to jsonstr
}
function loadFlashcards() {
    
}
showAnswerBtn.addEventListener("click", toggleHidden);
function toggleHidden() {

}