
function checkAnswer(button) {
    // Get the question div and the selected radio button
    var questionDiv = button.closest('.questions');
    var selectedAnswer = questionDiv.querySelector('input[type="radio"]:checked');

    // Get the answer div and the solution div
    var answerDiv = questionDiv.querySelector('.answer');
    var solutionDiv = questionDiv.querySelector('.solution');

    // Check if an answer is selected
    if (selectedAnswer === null) {
        alert('Please select an answer.');
        return;
    }

    // Check if the selected answer is correct
    if (selectedAnswer.value === questionDiv.dataset.answer) {
        // Display "Correct!" message in the answer div
        answerDiv.style.display = 'block';
        answerDiv.style.color = 'green';
        answerDiv.style.background = '#d4edda';
        answerDiv.style.border = '1px solid #c3e6cb';
        answerDiv.textContent = 'Correct!';
        solutionDiv.style.display = 'block';
    } else {
        // Show the solution if it is hidden
        var answerDiv = questionDiv.querySelector('.answer');
        answerDiv.style.display = 'block';
        answerDiv.style.color = 'red';
        answerDiv.style.background = '#f8d7da';
        answerDiv.style.border = '1px solid #f5c6cb';
        answerDiv.textContent = 'Incorrect.';
        solutionDiv.style.display = 'block';
    }
}

