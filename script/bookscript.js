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
MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation"]);



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

// Media script



 // Get all media containers
 const mediaContainers = document.querySelectorAll('.media-container');

 // Add click event listener to each media container
 mediaContainers.forEach((container) => {
     container.addEventListener('click', () => {
         const source = container.querySelector('.media-source img').src;
         const title = container.querySelector('.media-details h3').textContent;
         const description = container.querySelector('.media-details div').innerHTML;

         openPreview(source, title, description);


         container.classList.add('selected');

     });
 });

 // Open preview mode
 function openPreview(source, title, description) {
     // Create preview elements
     const previewContainer = document.createElement('div');
     previewContainer.classList.add('preview-container');

     const previewImage = document.createElement('img');
     previewImage.classList.add('preview-image');
     previewImage.src = source;

     const previewDetails = document.createElement('div');
     previewDetails.classList.add('preview-details');

    

     const collapseButton = document.createElement('span');
     collapseButton.classList.add('collapse-preview');
     collapseButton.innerHTML = '&times;';
     

     

     const uncollapseButton = document.createElement('div');
     uncollapseButton.classList.add('uncollapse-preview');
     uncollapseButton.innerHTML = '&alpha;';
     

     const previewTitle = document.createElement('h3');
     previewTitle.textContent = title;

     const previewDescription = document.createElement('div');
     previewDescription.innerHTML = description;

     // Append elements to preview container
     previewContainer.appendChild(previewImage);
     previewDetails.appendChild(previewTitle);
     previewDetails.appendChild(previewDescription);
     previewDetails.appendChild(collapseButton);
     previewDetails.appendChild(uncollapseButton);
     previewContainer.appendChild(previewDetails);

     // Append preview container to the body
     document.body.appendChild(previewContainer);

     // Add click event listener to close button
    

     // Add click event listener to collapse button
        collapseButton.addEventListener('click', collapseDetail);

     // Add click event listener to close button
     //uncollapseButton.addEventListener('click', collapseDetail);

     // Display the preview container
     previewContainer.style.display = 'block';

     addNavigationButtons();

 }



 // Add navigation buttons to preview mode
 function addNavigationButtons() {
    const previewContainer = document.querySelector('.preview-container');
    const previewNav = document.createElement('div');
    previewNav.classList.add('preview-nav');
  
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&lt';
    prevButton.addEventListener('click', showPrevMedia);
  
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&gt;';
    nextButton.addEventListener('click', showNextMedia);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-preview');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closePreview);
    
  
    previewNav.appendChild(prevButton);
    previewNav.appendChild(nextButton);
    previewContainer.appendChild(previewNav);
    previewContainer.appendChild(closeButton);

  
    // Listen for keydown events on the document
    document.addEventListener('keydown', function (event) {
        // Check if the left arrow key is pressed (code 37)
        if (event.keyCode === 37) {
          showPrevMedia();
          event.preventDefault(); // Prevent key repeat
        }
        // Check if the right arrow key is pressed (code 39)
        else if (event.keyCode === 39) {
          showNextMedia();
          event.preventDefault(); // Prevent key repeat
        }
        // Check if the escape key is pressed (code 27)
        else if (event.keyCode === 27) {
          closePreview();
          event.preventDefault(); // Prevent key repeat
        }
      });
      
  }
  
   // Close preview mode
 function closePreview() {
    const previewContainer = document.querySelector('.preview-container');
    previewContainer.remove();
}

function collapseDetail() {
    const previewDetails = document.querySelector('.preview-details');
    previewDetails.classList.add('collapsible-content');
    
}

function showDetails() {
    const showDetails = document.querySelector('.preview-details');
//    previewDetails.classList.add('.collapsible-content.open');
}

 // Show previous media in preview mode
 function showPrevMedia() {
     const currentContainer = document.querySelector('.media-container.selected');
     const prevContainer = currentContainer.previousElementSibling;

     if (prevContainer) {
         const prevImage = prevContainer.querySelector('.media-source img');
         const prevTitle = prevContainer.querySelector('.media-details h3').textContent;
         const prevDescription = prevContainer.querySelector('.media-details div').innerHTML;

         currentContainer.classList.remove('selected');
         prevContainer.classList.add('selected');

         const previewImage = document.querySelector('.preview-image');
         previewImage.src = prevImage.src;

         const previewTitle = document.querySelector('.preview-details h3');
         previewTitle.textContent = prevTitle;

         const previewDescription = document.querySelector('.preview-details div');
         previewDescription.innerHTML = prevDescription;
     }
 }

 // Show next media in preview mode
 function showNextMedia() {
     const currentContainer = document.querySelector('.media-container.selected');
     const nextContainer = currentContainer.nextElementSibling;

     if (nextContainer) {
         const nextImage = nextContainer.querySelector('.media-source img');
         const nextTitle = nextContainer.querySelector('.media-details h3').textContent;
         const nextDescription = nextContainer.querySelector('.media-details div').innerHTML;

         currentContainer.classList.remove('selected');
         nextContainer.classList.add('selected');

         const previewImage = document.querySelector('.preview-image');
         previewImage.src = nextImage.src;

         const previewTitle = document.querySelector('.preview-details h3');
         previewTitle.textContent = nextTitle;

         const previewDescription = document.querySelector('.preview-details div');
         previewDescription.innerHTML = nextDescription;
     }
 }

 // Set up navigation buttons
// addNavigationButtons();
