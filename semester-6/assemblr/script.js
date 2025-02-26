const quizData = [
    {
        question: "Raka berjalan menuju kantin dengan jarak sejauh 33 meter. Bila jarak yang ditempuh Raka diubah dalam satuan sentimeter, maka jarak yang ditempuh Raka menjadi berapa?",
        options: ["A. 330 cm", "B. 3300 cm", "C. 33.000 cm", "D. 330.000 cm"],
        answer: "B. 3300 cm"
    },
    {
        question: "Sebuah bus melakukan perjalanan sejauh 12.000 dam ke terminal A. Setelah dari terminal A, bus melanjutkan perjalanan ke terminal B dengan jarak 70.000 hm. Total jarak yang ditempuh bus tersebut yaitu … km",
        options: ["A. 7.120", "B. 71.200", "C. 712.000", "D. 7.120.000"],
        answer: "A. 7.120"
    },
    {
        question: "Sebuah jalan lintas kabupaten akan diaspal dengan panjang 46.000 meter. Panjang jalan yang akan diaspal tersebut adalah…hm?",
        options: ["A. 4.600 hm", "B. 460 hm", "C. 46 hm", "D. 4,6 hm"],
        answer: "B. 460 hm"
    },
    {
        question: "Mobil yang dikemudikan oleh ayah Mia mampu melakukan perjalanan sejauh 234 km dalam waktu 3 jam. Berapakan kecepatan mobil tersebut dalam m/menit?",
        options: ["A. 13000 m/menit", "B. 1100 m/menit", "C. 1200 m/menit", "D. 1300 m/menit"],
        answer: "D. 1300 m/menit"
    },
    {
        question: "Tono berjalan dari rumah ke sekolah sejauh 24 meter dalam waktu 6 menit. Berapa kecepatan Tono dalam cm/detik?",
        options: ["A. 20 cm/detik", "B. 50 cm/detik", "C. 6,6 cm/detik", "D. 3 cm/detik"],
        answer: "C. 6,6 cm/detik"
    },
    {
        question: "Pesawat terbang dapat menempuh jarak 396 km dalam waktu 2 jam. Berapa kecepatan pesawat terbang tersebut dalam m/detik?",
        options: ["A. 45 m/detik", "B. 40 m/detik", "C. 55 m/detik", "D. 50 m/detik"],
        answer: "C. 55 m/detik"
    },
    {
        question: "Lapangan yang terletak di desa Danu memiliki keliling 500 m. Saat sore hari, Danu berlari dengan kecepatan 25 m/menit. Danu dapat mengelilingi lapangan dalam waktu ... menit.",
        options: ["A. 20 menit", "B. 25 menit", "C. 30 menit", "D. 35 menit"],
        answer: "A. 20 menit"
    },
    {
        question: "Yoga bersepeda motor dari rumahnya menuju rumah kakeknya dengan kecepatan 40 km/jam. Waktu tempuh Yoga untuk bisa sampai di rumah kakek 2 jam 45 menit. Jarak rumah Yoga ke rumah kakek adalah ....",
        options: ["A. 145 km", "B. 155 km", "C. 120 km", "D. 110 km"],
        answer: "D. 110 km"
    },
    {
        question: "Joko pergi ke rumah pamannya yang berjarak 120 km. Joko menempuh jarak tersebut dengan sepeda motor, berkecepatan rata-rata 30 km/jam. Jika Joko berangkat dari rumah pukul 08.00, ia akan sampai di rumah pamannya pukul ....",
        options: ["A. 10.00", "B. 11.00", "C. 11.30", "D. 12.00"],
        answer: "D. 12.00"
    },
    {
        question: "Fariz berkendara sepeda motor dengan kecepatan 80 km/jam. Ia berangkat dari rumah pukul 05.00 dan berencana menuju rumah neneknya yang berjarak 32 km. Fariz diperkirakan akan sampai di rumah neneknya pukul ....",
        options: ["A. 05.20", "B. 08.30", "C. 07.20", "D. 07.30"],
        answer: "D. 07.30"
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