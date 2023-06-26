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

  


//MathJax configuration for single dollar sign
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
  
 
// Script 1: Polyfill
var script1 = document.createElement('script');
script1.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
document.head.appendChild(script1);

// Script 2: MathJax
var script2 = document.createElement('script');
script2.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
document.head.appendChild(script2);



/*


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

// Script 4: MathJax
var script4 = document.createElement('script');
script4.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML';
document.head.appendChild(script4);

*/




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











const menuToggleBtn = document.getElementById('menu-toggle-btn-id');
  const sideBar = document.querySelector('.sidebar');
  
  menuToggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
    
  });







// Get the sidebar container
var sidebar = document.getElementById('sidebar-id');

// Get all heading elements
var container = document.querySelector('.container');
var headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');



// Initialize variables to keep track of the parent div and current currentLevel
var parentDiv = sidebar;
var previousLevel = 0;

// Iterate over each heading element
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];
  var currentLevel = parseInt(heading.tagName.charAt(1));

  // Generate a unique ID for the heading element
  var headingId = 'sidebar-heading-' + i;

  // Set the generated ID on the heading element
  heading.setAttribute('id', headingId);


  // Create a new div for the current currentLevel if necessary
  if (currentLevel > previousLevel) {
    /*

    var sidebarCollapseButton = document.createElement('button');
    sidebarCollapseButton.className='sidebar-collapse-button';

    parentDiv.appendChild(sidebarCollapseButton);

*/

    var div = document.createElement('div');
    div.className = 'h' + currentLevel;
    parentDiv.appendChild(div);
    
    parentDiv = div;

    


  }

  
  // Move up the hierarchy if necessary
  else if (currentLevel < previousLevel) {
    while (previousLevel > currentLevel) {
      parentDiv = parentDiv.parentNode;
      previousLevel--;
    }
  }

  // Create a link element
  var link = document.createElement('a');
  link.textContent = heading.textContent;
  link.href = '#' + headingId;
  parentDiv.appendChild(link);

  
  parentDiv.appendChild(document.createElement('br'));

 

  // Update the current currentLevel
  previousLevel = currentLevel;
}







/*




var toggleButtons = document.querySelectorAll('.sidebar-collapse-button');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var childNodes = Array.from(this.parentNode.childNodes); // Get an array of child nodes
    childNodes.forEach(function(node) {
      if (node.nodeType === 1 && node !== button) {
        node.classList.toggle('open'); // Toggle the 'open' class for child nodes
      }
    });
  });
});

*/

















    // File name of the script
    var fileName = window.location.pathname.split("/").pop();


    lessonName = fileName.replace(/-/g, " ").replace(".html", "");



var fn = document.getElementById("lesson-name-id");
 fn.textContent=(lessonName);

// Content page location
// var contentPageLocation = "../contentRobbins.html";




// Regular expression pattern to match the file path within the href attribute
var pattern = /href="(.*?)\/([^/"]+\.html)"/g;

// Fetch the content of the "contentRobbins.html" file
fetch(contentPageLocation)
  .then(function(response) {
    return response.text();
  })
  .then(function(content) {
    // Array to store the extracted file positions
    var filePositions = [];

    // Extract the file positions using regex pattern matching from the content of "contentRobbins.html"
    var match;
    while ((match = pattern.exec(content)) !== null) {
      var filePath = match[2];
      filePositions.push(filePath);
    }

    // Find the position of the file in the content page
    var filePosition = filePositions.findIndex(function(filePath) {
      return filePath === fileName;
    });

    // Check if the file position is found
    if (filePosition !== -1) {
      // Set the file position in the <h1> element
      var h1Element = document.getElementById("lesson-no-id");
      h1Element.textContent = (filePosition + 1).toString();
    } else {
      console.log("File position not found.");
    }
  })
  .catch(function(error) {
    console.log("Error fetching contentRobbins.html:", error);
  });




  /*



  // Get the container element
const container1 = document.querySelector('.container');

// Get all the section IDs within the container element
const previewSectionIDs = Array.from(container1.querySelectorAll('[id^="sidebar-heading-"]')).map((element) => element.id);

// Loop through the IDs and add a class to the corresponding elements in the sidebar
previewSectionIDs.forEach((sectionID) => {
  const sidebarLink = document.querySelector(`#sidebar-id a[href="#${sectionID}"]`);
  if (sidebarLink) {
    sidebarLink.classList.add("focused-section");
  }
});



*/



/*

// Get the container element
const container1 = document.querySelector('.container');

// Function to focus on a section
function focusSection(sectionID) {
  const section = document.getElementById(sectionID);
  
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });

    // Add a class to highlight the focused section
    section.classList.add('focused-section');

    // Remove the class from other sections
    const sections = container1.querySelectorAll('[id^="sidebar-heading-"]');
    sections.forEach((sec) => {
      if (sec !== section) {
        sec.classList.remove('focused-section');
      }
    });
  }
}

// Example: Dynamically add a new section
function addNewSection() {
  const newSectionID = 'sidebar-heading-3'; // Example ID for the new section
  const newSection = document.createElement('div');
  newSection.id = newSectionID;
  newSection.textContent = 'New Section';

  container.appendChild(newSection);

  // Focus on the new section
  focusSection(newSectionID);
}

// Example: Remove an existing section
function removeSection() {
  const sectionToRemoveID = 'sidebar-heading-2'; // Example ID of the section to remove
  const sectionToRemove = document.getElementById(sectionToRemoveID);

  sectionToRemove.remove();

  // Focus on the previous section if available
  const sections = container.querySelectorAll('[id^="sidebar-heading-"]');
  if (sections.length > 0) {
    const previousSection = sections[sections.length - 1];
    focusSection(previousSection.id);
  }
}


*/





 // JavaScript code to handle link clicks
  document.addEventListener('DOMContentLoaded', function() {
    var internalLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < internalLinks.length; i++) {
      internalLinks[i].addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var target = this.getAttribute('href');
        animateBody(target);
        // Scroll to the target element with smooth behavior
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Function to animate the body based on the target link
  function animateBody(target) {
    var body = document.querySelector('body');
    if (target === '#top') {
      body.classList.add('move-up');
      setTimeout(function() {
        body.classList.remove('move-up');
      }, 300);
    } else if (target === '#bottom') {
      body.classList.add('move-down');
      setTimeout(function() {
        body.classList.remove('move-down');
      }, 300);
    }
  }