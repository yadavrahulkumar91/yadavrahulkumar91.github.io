function openContainer(evt, containerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(containerName + "-container").style.display = "block";
    evt.currentTarget.className += " active-tab";
  }

  



  // JavaScript file

// Script 1: Polyfill
var script1 = document.createElement('script');
script1.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
document.head.appendChild(script1);

// Script 2: MathJax
var script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
document.head.appendChild(script2);

// Script 3: MathJax Configuration
var script3 = document.createElement('script');
script3.type = 'text/x-mathjax-config';
script3.innerHTML = `
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$']],
            processEscapes: true
        },
        "HTML-CSS": {
            scale: 90
        }
    });
`;
document.head.appendChild(script3);




//form
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


//Gallery
 // Open fullscreen mode
 function openFullscreen(title, description) {
  const fullscreen = document.querySelector('.fullscreen');
  const image = document.querySelector('.fullscreen .image');
  const titleElement = document.querySelector('.fullscreen-title');
  const descriptionElement = document.querySelector('.fullscreen-description');

  image.src = event.target.src;
  titleElement.textContent = title;
  descriptionElement.textContent = description;
  fullscreen.style.display = 'flex';
}


// Close fullscreen mode
function closeFullscreen() {
  const fullscreen = document.querySelector('.fullscreen');
  fullscreen.style.display = 'none';
}

