
function loadChemDoodleResources(callback) {
    // Create and append the link element for CSS
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.css';
    cssLink.type = 'text/css';

    // Create and append the script element for JavaScript
    var script4 = document.createElement('script');
    script4.type = 'text/javascript';
    script4.src = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.js';

    // Append the link and script elements to the head of the document
    document.head.appendChild(cssLink);
    document.head.appendChild(script4);

    // Add load event listeners to both CSS and JS resources
    cssLink.addEventListener('load', function() {
        script4.addEventListener('load', callback); // Execute the callback after JS loads
    });
}











// var cssLink = document.createElement('link');
// cssLink.rel = 'stylesheet';
// cssLink.href = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.css';
// cssLink.type = 'text/css';
// document.head.appendChild(cssLink);

// var script4 = document.createElement('script');
// script4.type = 'text/javascript';
// script4.src = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.js';
// document.head.appendChild(script4);






// document.addEventListener('DOMContentLoaded', function() {
//     var cssLink = document.createElement('link');
//     cssLink.rel = 'stylesheet';
//     cssLink.href = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.css';
//     cssLink.type = 'text/css';
//     document.head.appendChild(cssLink);

//     // Create and append the script element for JavaScript
//     var script4 = document.createElement('script');
//     script4.type = 'text/javascript';
//     script4.src = '/cdn/ChemDoodleWeb-9.5.0/install/ChemDoodleWeb.js';
//     document.head.appendChild(script4);
// });





/*

// Get the sidebar container
var sidebar = document.getElementById('sidebar-id');

// Get all heading elements
var homeContainer = document.querySelector('.container');
var homeContainerElements = Array.from(homeContainer.querySelectorAll('.container > *'));
var headings = homeContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');


// Initialize variables to keep track of the parent div and current currentLevel
var sideBarParentDiv = sidebar;
var homeParentDiv = homeContainer;
var homeChildDiv;
var previousLevel = 0;


for (var j = 0; j < homeContainerElements.length; j++) {
    var homeContainerElement = homeContainerElements[j];

    if (homeContainerElement.tagName.toLowerCase().startsWith('h')) {
        // Code to execute if it is an <h1> to <h6> element





        // Iterate over each heading element
        
            var heading = homeContainerElement;
            var currentLevel = parseInt(heading.tagName.charAt(1));

            // Generate a unique ID for the heading element
            var headingId = 'sidebar-heading-' + j;

            // Set the generated ID on the heading element
            heading.setAttribute('id', headingId);


            // Create a new div for the current currentLevel if necessary
            if (currentLevel > previousLevel) {

                var sideBarChildDiv = document.createElement('div');
                sideBarChildDiv.className = 'h' + currentLevel;
                sideBarParentDiv.appendChild(sideBarChildDiv);
                sideBarParentDiv = sideBarChildDiv;




                homeChildDiv = document.createElement('div');
                homeChildDiv.className = 'hh' + currentLevel;
                homeParentDiv.appendChild(homeChildDiv);
                homeParentDiv = homeChildDiv;

            }


            // Move up the hierarchy if necessary
            else if (currentLevel < previousLevel) {

                while (previousLevel > currentLevel) {
                    sideBarParentDiv = sideBarParentDiv.parentNode;
                    homeParentDiv = homeParentDiv.parentNode;
                    previousLevel--;
                }

            }

            homeParentDiv.appendChild(homeContainerElement);
            // Create a link element
            var link = document.createElement('a');
            link.textContent = heading.textContent;
            link.href = '#' + headingId;
            sideBarParentDiv.appendChild(link);
            sideBarParentDiv.appendChild(document.createElement('br'));
            // Update the current currentLevel
            previousLevel = currentLevel;
        
    }

    else{
        homeParentDiv.appendChild(homeContainerElement);
    }

}



*/