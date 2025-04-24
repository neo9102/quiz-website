const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".timer-duration");
const resultContainer = document.querySelector(".result-container");

// quiz state variables
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0; // Add counter for correct answers


//display the quiz and hide the quiz container
const showQuizResult =() => {
    quizContainer.style.display ="none";
    resultContainer.style.display ="block";
    
    // Get the result message element
    const resultMessage = resultContainer.querySelector(".result-message");
    
    // Update the result message with the correct number of questions and score
    resultMessage.innerHTML = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly, Great effort!`;
}

// Initialize and start the timer for the current question
const startTimer = () => {
    // Clear any existing timer
    if (timer) {
        clearInterval(timer);
    }
    
    // Reset timer to initial value
    currentTime = QUIZ_TIME_LIMIT;
    updateTimerDisplay();
    
    // Start new timer
    timer = setInterval(() => {
        currentTime--;
        updateTimerDisplay();

        if (currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
            
            // Disable all answer options when time runs out
            answerOptions.querySelectorAll(".answer-option").forEach(option => {
                option.style.pointerEvents = "none";
            });
        }
    }, 1000);
}

// Update timer display
const updateTimerDisplay = () => {
    if (timerDisplay) {
        timerDisplay.textContent = `${currentTime}s`;
    }
}

// Stop the timer
const stopTimer = () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Reset the timer
const resetTimer = () => {
    stopTimer();
    currentTime = QUIZ_TIME_LIMIT;
    updateTimerDisplay();
}

// fetch a random question from based on the selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    // show the results if all questions have been used
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    // filter out already asked questions and choose a random one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    stopTimer(); // Stop the timer when answer is selected

    // Disable all answer options to prevent multiple selections
    answerOptions.querySelectorAll(".answer-option").forEach(opt => {
        opt.style.pointerEvents = "none";
    });

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer() : "";

    // Count correct answers
    if (isCorrect) {
        correctAnswerCount++;
    }

    // insert icon based on correctness using Material Symbols
    const iconHTML = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // Show next button only after an option is selected
    nextQuestionBtn.style.visibility = "visible";
}

// render the current question and its options in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    // update UI
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    // create option <li> elements and append them, and click-event-listeners
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });

    resetTimer(); // Reset timer before starting
    startTimer(); // Start timer after UI is ready
}

//Start the quiz and render the random question
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // Get the selected category
    const selectedCategory = configContainer.querySelector(".category-options .active");
    if (selectedCategory) {
        quizCategory = selectedCategory.textContent.toLowerCase();
    }

    // Get the selected number of questions
    const selectedQuestions = configContainer.querySelector(".question-options .active");
    if (selectedQuestions) {
        numberOfQuestions = parseInt(selectedQuestions.textContent);
    }

    // Reset quiz state
    questionsIndexHistory.length = 0;
    currentQuestion = null;
    resetTimer();

    // Start the quiz
    renderQuestion();
}

//Highlight the selected option on click category or no. of question
document.querySelectorAll(".category-options button, .question-options button").forEach(option => {
    option.addEventListener("click", () => {
        // Remove active class from all buttons in the same group
        option.parentNode.querySelectorAll("button").forEach(btn => {
            btn.classList.remove("active");
        });
        // Add active class to clicked button
        option.classList.add("active");
    });
});

//Reset the quiz and return to the configuration container
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0; // Reset correct answer count
    questionsIndexHistory.length = 0;
    configContainer.style.display= "block";
    resultContainer.style.display = "none";

}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);