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
        const response = await fetch("db.json");
        const data = await response.json();
        console.log(data);
    } catch {
        console.log("error loading flashcards")
    }
}

showAnswerBtn.addEventListener("click", toggleHidden);
function toggleHidden() {

}