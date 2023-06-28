

// Get the sidebar container
var sidebar = document.getElementById('sidebar-id');

// Get all heading elements
var headerContainer = document.querySelector('.container');
var headings = headerContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');


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
