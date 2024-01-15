const quizData = [
    {
        question: "Air kali sebanyak 36.000liter mengalir dalam waktu 6 menit. Debit air kali tersebut adalah ...",
        options: ["a. 6.000 liter/menit", "b. 1.000 liter/menit", "c. 600 liter/menit", "d. 100 liter/menit"],
        answer: "a. 6.000 liter/menit"
    },
    {
        question: "Sebuah bak terisi penuh selama 10 menit. Jika debit air yang mengalir ke dalam bak adalah 20 liter/menit, volume bak tersebut adalah ...",
        options: ["a. 100 liter", "b. 200 liter", "c. 400 liter", "d. 800 liter"],
        answer: "b. 200 liter"
    },
    {
        question: "Volume kolam renang yang belum terisi air 336 m³. Jika kolam renang tersebut diisi air dengan debit 28 m³/jam, waktu yang diperlukan agar kolam terisi penuh air adalah ....",
        options: ["a. 28 jam", "b. 16 jam", "c. 12 jam", "d. 4 jam"],
        answer: "c. 12 jam"
    },
    {
        question: "Sebuah pipa mampu mengalirkan air sebanyak 216liter air dalam waktu 10 menit. Berapa cm³/ detik debit aliran pipa air tersebut?",
        options: ["a. 300 cm³", "b. 350 cm³", "c. 360 cm³", "d. 340 cm³"],
        answer: "c. 360 cm³"
    },
    {
        question: "Vina memiliki bak dengan ukuran panjang 90, lebarnya 70 cm, dan tinggi 80 cm. Bak tersebut diisi air dari kran. Air keran mampu mengisi bak hingga penuh selama 20 menit. Berapa liter/menit debit air yang mengalir dari kran tersebut?",
        options: ["a. 0,42 liter / detik", "b. 0,46 liter / detik", "c. 0,48 liter / detik", "d. 0,40 liter / detik"],
        answer: "a. 0,42 liter / detik"
    },
    {
        question: "Raldi mengisi bak mandi hingga penuh menggunakan keran selama 20 menit. Volume bak mandi itu 100 liter. Berapa l / menit debit air yang mengalir melalui keran tersebut?",
        options: ["a. 6 liter / menit", "b. 10 liter / menit", "c. 15 liter / menit", "d. 5 liter / menit"],
        answer: "d. 5 liter / menit"
    },
    {
        question: "Sebuah bak mandi diisi air mulai pukul 07.20 sampai pukul 07.50. Dengan debit 10 liter/ menit. Berapa liter volume air dalam dalam bak mandi tersebut?",
        options: ["a. 200 liter", "b. 150 liter", "c. 300 liter", "d. 250 liter"],
        answer: "c. 300 liter"
    },
    {
        question: "Dalam waktu 1 jam, sebuah keran dapat mengeluarkan air sebesar 3.600 m³. Berapa liter/detik debit air tersebut?",
        options: ["a. 1.000 liter / detik", "b. 500 liter / detik", "c. 1.500 liter / detik", "d. 550 liter / detik"],
        answer: "a. 1.000 liter / detik"
    },
    {
        question: "Volume sebuah bak mandi 200 dm³. Diisi dengan air dari sebuah kran dengan debit 5 liter/menit. Berapa menit waktu yang dibutuhkan untuk mengisi bak mandi tadi hingga penuh?",
        options: ["a. 35 menit", "b. 30 menit", "c. 40 menit", "d. 60 menit"],
        answer: "c. 40 menit"
    },
    {
        question: "Sebuah kolam renang diisi dengan air melalui sebuah pipa. Jika debit pipa tersebut 720 liter/detik dalam waktu 12 menit. Berapa liter volume air yang harus diisi?",
        options: ["a. 5185 liter", "b. 5184 liter", "c. 5186 liter", "d. 5188 liter "],
        answer: "b. 5184 liter"
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

