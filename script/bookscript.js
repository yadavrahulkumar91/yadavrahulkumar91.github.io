



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

var script3 = document.createElement('script');
script3.type = 'text/javascript';
script3.src = 'https://www.gstatic.com/charts/loader.js';
document.head.appendChild(script3);














//form

// Get all elements with the class "choices"
const choicesElements = document.querySelectorAll('.choices');

// Loop through each element and attach the new div
choicesElements.forEach(element => {
  // Create a new div element with the class "answer"
  const div1 = document.createElement('div');
  div1.className = 'answer';

  // Insert the new div element after the current element
  element.insertAdjacentElement('afterend', div1);
});




// const answerElements = document.querySelectorAll('.solution');

// answerElements.forEach(element => {
//   const button = document.createElement('button');
//   button.className = 'check-button';
//   button.textContent = 'Check';
//   button.onclick = function () {
//   checkAnswer(this); 
//   };

//   element.insertAdjacentElement('afterend', button);
// });


const choicesElements1 = document.querySelectorAll('.choices');

choicesElements1.forEach((choicesElement, index) => {
  const choiceElements = choicesElement.querySelectorAll('.choice');

  choiceElements.forEach((choiceElement, choiceIndex) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'q' + (index + 1);
    input.value = String.fromCharCode(97 + choiceIndex); 

      // Attach the onchange event handler to the input element
      input.onchange = function() {
        checkAnswer(input);
      };

    choiceElement.insertBefore(input, choiceElement.firstChild);
  });
});







function checkAnswer(button) {
  var questionDiv = button.closest('.questions');
  var selectedAnswer = questionDiv.querySelector('input[type="radio"]:checked');

  var answerDiv = questionDiv.querySelector('.answer');
  var solutionDiv = questionDiv.querySelector('.solution');

  if (selectedAnswer === null) {
    alert('Please select an answer.');
    return;
  }

  // Check if the selected answer is correct
  if (selectedAnswer.value === questionDiv.dataset.answer) {
    // Display "Correct!" message in the answer div
    questionDiv.style.background = '#d4edda';

    // answerDiv.style.display = 'block';
    answerDiv.style.color = 'green';
    answerDiv.style.background = '#d4edda';
    questionDiv.style.border = ' solid #c3e6cb';
    answerDiv.textContent = 'Correct!';
    solutionDiv.style.display = 'block';
  } else {
    // Show the solution if it is hidden
    var answerDiv = questionDiv.querySelector('.answer');
    questionDiv.style.background = '#f8d7da';

    // answerDiv.style.display = 'block';
    answerDiv.style.color = 'red';
    answerDiv.style.background = '#f8d7da';
    questionDiv.style.border = ' solid #f5c6cb';
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











// Append the div element to the header section of the document
var headerElement = document.getElementsByTagName('header')[0];

// Get the reference to the main section
var mainElement = document.getElementsByTagName('main')[0];






// Create a sidebar Menu button element
var sidebarMenuButton = document.createElement('div');
sidebarMenuButton.classList.add('menu-toggle-btn');
sidebarMenuButton.id = 'menu-toggle-btn-id';

// Create an i element for the font-awesome icon
var sidebarIconElement = document.createElement('i');
sidebarIconElement.classList.add('fas', 'fa-bars');

// Append the icon element to the div element
sidebarMenuButton.appendChild(sidebarIconElement);
headerElement.appendChild(sidebarMenuButton);


// Create an activity menu button element
var activitySectionButton = document.createElement('div');
activitySectionButton.classList.add('activity-toggle-btn');
activitySectionButton.id = 'activity-toggle-btn-id';

// Create an i element for the font-awesome icon
var activityIconElement = document.createElement('i');
activityIconElement.classList.add('fas', 'fa-cog');

// Append the icon element to the div element
activitySectionButton.appendChild(activityIconElement);
headerElement.appendChild(activitySectionButton);






// Create a Sidebar menu element
var sidebarMenu = document.createElement('div');
sidebarMenu.classList.add('sidebar');
sidebarMenu.id = 'sidebar-id';
// Insert the div element at the beginning of the main section
mainElement.insertBefore(sidebarMenu, mainElement.firstChild);



// Create an activity section element and append at last of main section
var activitySection = document.createElement('div');
activitySection.classList.add('activity-section');
activitySection.id = 'activity-section-id';
mainElement.appendChild(activitySection);






var homeContainer = document.querySelectorAll('.container');

var sidebarDiv = [];
var activitySectionDiv = [];
var a = 0;

for (var i = 0; i < homeContainer.length; i++) {
 // Get the ID from the corresponding container
 var containerId = homeContainer[i].id;

  

  // Create a Sidebar menu element
sidebarDiv[i]= document.createElement('div');
sidebarDiv[i].classList.add('sidebar-div');
 sidebarDiv[i].id = "sidebarDiv" + containerId;


 activitySectionDiv[i] = document.createElement('div');
activitySectionDiv[i].classList.add('activity-section-div');
activitySectionDiv[i].id = "activitySectionDiv" + containerId;



  var homeContainerElements = Array.from(homeContainer[i].querySelectorAll('.container > *'));


  // Initialize variables to keep track of the parent div and current currentLevel
  var sideBarParentDiv = sidebarDiv[i];
  var homeParentDiv = homeContainer[i];
  var activityParentDiv = activitySectionDiv[i];
  var previousLevel = 0;


  for (j=0; j < homeContainerElements.length; j++, a++) {
    var homeContainerElement = homeContainerElements[j];

    if (homeContainerElement.tagName === 'TABLE') {
      var overflowScroll = document.createElement('div');
      overflowScroll.classList.add('overflow-scroll');
      overflowScroll.appendChild(homeContainerElement);
      homeContainerElement = overflowScroll;
    }


    if (homeContainerElement.tagName.toLowerCase().startsWith('h')) {
      // Code to execute if it is an <h1> to <h6> element

      // Iterate over each heading element

      var heading = homeContainerElement;
      var currentLevel = parseInt(heading.tagName.charAt(1));

      // Generate a unique ID for the heading element
      var headingId = 'sidebar-heading-' + a;

      // Set the generated ID on the heading element
      heading.setAttribute('id', headingId);


      // Create a new div for the current currentLevel if necessary
      if (currentLevel > previousLevel) {
        var sideBarChildDiv = document.createElement('div');
        sideBarChildDiv.className = 'h' + currentLevel;
        sideBarParentDiv.appendChild(sideBarChildDiv);
        sideBarParentDiv = sideBarChildDiv;

        var homeChildDiv = document.createElement('div');
        homeChildDiv.className = 'hh' + currentLevel;
        homeParentDiv.appendChild(homeChildDiv);

        var activityChildDiv = document.createElement('div');
        activityChildDiv.className = 'hh' + currentLevel;
        activityParentDiv.appendChild(activityChildDiv);

        homeParentDiv = homeChildDiv;
        activityParentDiv = activityChildDiv;
      }

      // Move up the hierarchy if necessary
      else if (currentLevel < previousLevel) {
        while (previousLevel > currentLevel) {
          sideBarParentDiv = sideBarParentDiv.parentNode;
          homeParentDiv = homeParentDiv.parentNode;
          activityParentDiv = activityParentDiv.parentNode;
          previousLevel--;
        }
      }

      homeParentDiv.appendChild(homeContainerElement);
      activityParentDiv.appendChild(homeContainerElement.cloneNode(true));
      // Create a link element
      var link = document.createElement('a');
      link.textContent = heading.textContent;
      link.href = '#' + headingId;
      sideBarParentDiv.appendChild(link);
      sideBarParentDiv.appendChild(document.createElement('br'));
      // Update the current currentLevel
      previousLevel = currentLevel;
    }
    else {
      homeParentDiv.appendChild(homeContainerElement);

      if (homeContainerElement.classList.contains('MCQ-container')) {
        activityParentDiv.appendChild(homeContainerElement);
      }


    }
  }
  sidebarMenu.appendChild(sidebarDiv[i]);
  activitySection.appendChild(activitySectionDiv[i]);
}



sidebarMenuButton.addEventListener('click', () => {
  sidebarMenu.classList.toggle('show-sidebar');
});

activitySectionButton.addEventListener('click', () => {
  activitySection.classList.toggle('show-activity-section');
});





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


var lessonName = fileName.replace(/-/g, " ").replace(/_/g, " ").replace(".html", "");




var lessonNameID = document.getElementById("lesson-name-id");
lessonNameID.textContent = (lessonName);





// Retrieve the title element
var titleElement = document.getElementsByTagName("title")[0];

// Update the content of the title element with lessonName
if (titleElement) {
  titleElement.innerHTML = lessonName;
}

// Content page location
// var contentPageLocation = "../contentRobbins.html";




// Regular expression pattern to match the file path within the href attribute
var pattern = /href="(.*?)\/([^/"]+\.html)"/g;

// Fetch the content of the "contentRobbins.html" file
fetch(contentPageLocation)
  .then(function (response) {
    return response.text();
  })
  .then(function (content) {
    // Array to store the extracted file positions
    var filePositions = [];

    // Extract the file positions using regex pattern matching from the content of "contentRobbins.html"
    var match;
    while ((match = pattern.exec(content)) !== null) {
      var filePath = match[2];
      filePositions.push(filePath);
    }

    // Find the position of the file in the content page
    var filePosition = filePositions.findIndex(function (filePath) {
      return filePath === fileName;
    });

    // Check if the file position is found
    if (filePosition !== -1) {
      // Set the file position in the <h1> element
      var lessonNoID = document.getElementById("lesson-no-id");
      lessonNoID.textContent = (filePosition + 1).toString();
    } else {
      console.log("File position not found.");
    }
  })
  .catch(function (error) {
    console.log("Error fetching contentRobbins.html:", error);
  });






// // JavaScript code to handle link clicks
// document.addEventListener('DOMContentLoaded', function () {
//   var internalLinks = document.querySelectorAll('a[href^="#"]');
//   for (var i = 0; i < internalLinks.length; i++) {
//     internalLinks[i].addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent the default link behavior
//       var target = this.getAttribute('href');
//       animateBody(target);
//       // Scroll to the target element with smooth behavior
//       document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
//     });
//   }
// });

// // Function to animate the body based on the target link
// function animateBody(target) {
//   var body = document.querySelector('body');
//   if (target === '#top') {
//     body.classList.add('move-up');
//     setTimeout(function () {
//       body.classList.remove('move-up');
//     }, 300);
//   } else if (target === '#bottom') {
//     body.classList.add('move-down');
//     setTimeout(function () {
//       body.classList.remove('move-down');
//     }, 300);
//   }
// }


// // JavaScript code to handle link clicks
// document.addEventListener('DOMContentLoaded', function () {
//   var internalLinks = document.querySelectorAll('a[href^="#"]');
//   for (var i = 0; i < internalLinks.length; i++) {
//     internalLinks[i].addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent the default link behavior
//       var target = this.getAttribute('href');
//       var targetElements = document.querySelectorAll(target);

//       targetElements.forEach(function (element) {
//         element.scrollIntoView({ behavior: 'instant'});
//       });
//     });
//   }
// });

// JavaScript code to handle link clicks
document.addEventListener('DOMContentLoaded', function () {
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < internalLinks.length; i++) {
    internalLinks[i].addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      var target = this.getAttribute('href');
      var targetElements = document.querySelectorAll(target);

      targetElements.forEach(function (element, index) {
        setTimeout(function () {
          element.scrollIntoView({ behavior: 'smooth' });
        }, index * 600); // Delay each scroll by 500 milliseconds (adjust as needed)
      });
    });
  }
});




/*
var contentPageLocation = "../contentRobbins.html";
var unitName = '';

// Fetch the content of the current page
fetch(contentPageLocation)
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to parse the fetched HTML content
    var tempElement = document.createElement('html');
    tempElement.innerHTML = data;

    // Find the unit name based on the file name
    var units = tempElement.getElementsByClassName("unit");
    for (var i = 0; i < units.length; i++) {
      var unit = units[i];
      var nextSibling = unit.nextElementSibling;
      while (nextSibling) {
        if (nextSibling.tagName === 'A' && nextSibling.href.endsWith(fileName)) {
          unitName = unit.textContent.trim();
          break;
        }
        nextSibling = nextSibling.nextElementSibling;
      }
      if (unitName !== '') {
        break;
      }
    }

    console.log("Unit Name:", unitName);

    // Assign unit name to the element with ID "unit-name-id"
    var unitNameID = document.getElementById("unit-name-id");
    unitNameID.textContent = unitName;
  })
  .catch(error => {
    console.error('Error fetching page:', error);
  });

*/



/*
var unitName = '';

// Extract the file name from the current page URL
var fileName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

// Fetch the content of the current page
fetch(contentPageLocation)
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to parse the fetched HTML content
    var tempElement = document.createElement('html');
    tempElement.innerHTML = data;

    // Find the unit name based on the file name
    var units = tempElement.getElementsByClassName("unit");
    for (var i = 0; i < units.length; i++) {
      var unit = units[i];
      var nextSibling = unit.nextElementSibling;
      while (nextSibling) {
        if (nextSibling.tagName === 'A' && nextSibling.href.endsWith(fileName)) {
          unitName = unit.textContent.trim();
          break;
        }
        nextSibling = nextSibling.nextElementSibling;
      }
      if (unitName !== '') {
        break;
      }
    }

    console.log("Unit Name:", unitName);

    // Assign unit name to the element with ID "unit-name-id"
    var unitNameID = document.getElementById("unit-name-id");
    unitNameID.textContent = unitName;
  })
  .catch(error => {
    console.error('Error fetching page:', error);
  });

*/



/*
// var contentPageLocation = "../contentRobbins.html";
var unitName = '';

// Fetch the content of the content page
fetch(contentPageLocation)
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to parse the fetched HTML content
    var tempElement = document.createElement('html');
    tempElement.innerHTML = data;

    // Find the unit name based on the file name
    var units = tempElement.querySelectorAll(".unit");
    var fileName1 = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    for (var i = 0; i < units.length; i++) {
      var unit = units[i];
      var lessonLinks = unit.nextElementSibling.querySelectorAll("a.lesson");
      for (var j = 0; j < lessonLinks.length; j++) {
        var lessonLink = lessonLinks[j];
        if (lessonLink.href.endsWith(fileName1)) {
          unitName = unit.textContent.trim();
          break;
        }
      }
      if (unitName !== '') {
        break;
      }
    }

    console.log("Unit Name:", unitName);

    // Assign unit name to the element with ID "unit-name-id"
    var unitNameID = document.getElementById("unit-name-id");
    unitNameID.textContent = unitName;
  })
  .catch(error => {
    console.error('Error fetching content page:', error);
  });
*/

// var contentPageLocation = "../contentRobbins.html";
var unitName = '';

// Get the current file name
var fileName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

// Fetch the content of the content page
fetch(contentPageLocation)
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to parse the fetched HTML content
    var tempElement = document.createElement('html');
    tempElement.innerHTML = data;

    // Get all elements from class "container" in the content page
    var containers = tempElement.getElementsByClassName("container");

    // Loop through each container element
    for (var i = 0; i < containers.length; i++) {
      var elements = containers[i].children;

      // Loop through each element within the container
      for (var j = 0; j < elements.length; j++) {
        var element = elements[j];

        // Check if the element belongs to class "unit"
        if (element.classList.contains("unit")) {
          unitName = element.textContent.trim();
        } else if (element.tagName === "A" && element.classList.contains("lesson")) {
          // Check if the element belongs to class "lesson" and match its href with the fileName
          if (element.href.endsWith(fileName)) {
            // Stop the loop and assign the unit name
            break;
          }
        }
      }

      // Check if the unit name is found, and exit the loop
      if (unitName !== '') {
        break;
      }
    }

    console.log("Unit Name:", unitName);

    // Assign unit name to the element with ID "unit-name-id"
    var unitNameID = document.getElementById("unit-name-id");
    unitNameID.textContent = unitName;
  })
  .catch(error => {
    console.error('Error fetching content page:', error);
  });









// Create a link element
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css';

// Append the link element to the head section of the document
document.head.appendChild(linkElement);







// var printButton = document.getElementById('print-button');
// printButton.addEventListener('click', printPage);

// function printPage() {
//   window.print();
// }





function openContainer(evt, containerName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  for (var i = 0; i < sidebarDiv.length; i++) {
    sidebarDiv[i].style.display = "none";
  }

  for (var i = 0; i < sidebarDiv.length; i++) {
    activitySectionDiv[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }
  
  document.getElementById(containerName + "-container").style.display = "block";
  document.getElementById("sidebarDiv" + containerName + "-container").style.display = "block";
  document.getElementById("activitySectionDiv" + containerName + "-container").style.display = "block";

  evt.currentTarget.className += " active-tab";
}




// const topItem = document.querySelector('.chart-heading');
// const parent = topItem.closest('.parent');
//   parent.classList.add('new-background');

// if (topItem.textContent === 'Top-Aligned Item') {
//   const parent = topItem.closest('.parent');
//   parent.classList.add('top-aligned-parent');
// }