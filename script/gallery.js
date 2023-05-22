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
 
  //  var imagePreview = event.currentTarget;
    const imageDetails = imagePreview.querySelector('.image-details');


    // Show image details
    imageDetails.style.display = 'none';
  
 
  }