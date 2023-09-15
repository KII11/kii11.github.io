const quizData = [
    {
        question: "Apa bahasa Inggris dari 'mobil'?",
        options: ["car", "house", "dog", "ball"],
        answer: "car"
    },
    {
        question: "Mana yang merupakan warna biru dalam bahasa Inggris?",
        options: ["red", "blue", "green", "yellow"],
        answer: "blue"
    },
    {
        question: "Apa bahasa Inggris dari 'buku'?",
        options: ["pen", "book", "table", "chair"],
        answer: "book"
    },
    {
        question: "Apa bahasa Inggris dari 'kucing'?",
        options: ["dog", "fish", "cat", "bird"],
        answer: "cat"
    },
    {
        question: "Mana yang merupakan buah dalam bahasa Inggris?",
        options: ["dog", "banana", "car", "school"],
        answer: "banana"
    },
    {
        question: "Apa bahasa Inggris dari 'meja'?",
        options: ["table", "chair", "lamp", "bed"],
        answer: "table"
    },
    {
        question: "Mana yang merupakan binatang dalam bahasa Inggris?",
        options: ["apple", "sun", "lion", "moon"],
        answer: "lion"
    },
    {
        question: "Apa bahasa Inggris dari 'kuda'?",
        options: ["horse", "bike", "boat", "bus"],
        answer: "horse"
    },
    {
        question: "Mana yang merupakan angka 3 dalam bahasa Inggris?",
        options: ["one", "two", "three", "four"],
        answer: "three"
    },
    {
        question: "Apa bahasa Inggris dari 'rumah'?",
        options: ["car", "house", "dog", "ball"],
        answer: "house"
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


<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-kii11-github-io-kii-halaman4-html.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>