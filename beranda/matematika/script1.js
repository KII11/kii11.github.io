const quizData = [
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData);

const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('score');
const submitButton = document.getElementById('submit-button');
const retryButton = document.getElementById('retry-button');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    quizContainer.innerHTML = `<h2>${currentQuiz.question}</h2>`;
    for (let i = 0; i < currentQuiz.options.length; i++) {
        quizContainer.innerHTML += `
            <input type="radio" name="answer" value="${currentQuiz.options[i]}">
            <label>${currentQuiz.options[i]}</label><br>
        `;
    }
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');
    if (!userAnswer) return;

    if (userAnswer.value === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    quizContainer.innerHTML = `<h2>Skor Anda: ${score} / ${quizData.length}</h2>`;
    scoreDisplay.textContent = score;
    submitButton.disabled = true;
    retryButton.style.display = "inline-block";
}

submitButton.addEventListener('click', checkAnswer);

retryButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    shuffleArray(quizData);
    displayQuestion();
    scoreDisplay.textContent = score;
    submitButton.disabled = false;
    retryButton.style.display = "none";
});

displayQuestion();

let isZoomed = false;

function toggleZoom() {
    const zoomImage = document.getElementById('zoomImage');
    isZoomed = !isZoomed;
    if (isZoomed) {
        zoomImage.classList.add('zoomed');
    } else {
        zoomImage.classList.remove('zoomed');
    }
}

const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', toggleZoom);

function toggleZoom() {
    const zoomImage = document.getElementById('zoomImage');
    isZoomed = !isZoomed;
    if (isZoomed) {
        zoomImage.classList.add('zoomed');
    } else {
        zoomImage.classList.remove('zoomed');
    }
}

const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', toggleZoom);