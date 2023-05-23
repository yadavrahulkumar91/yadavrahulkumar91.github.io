function openFullscreen() {
  const fullscreen = document.querySelector('.fullscreen');
  const image = document.querySelector('.fullscreen .image');
  image.src = event.target.src;
  fullscreen.style.display = 'flex';

  var imagePreview = event.currentTarget;
  var imageDetailsList = imagePreview.querySelectorAll('.image-details');

  imageDetailsList.forEach(function (imageDetails) {
      if (imageDetails.parentElement === imagePreview) {
          imageDetails.style.display = 'block';
      } else {
          imageDetails.style.display = 'none';
      }
  });
}

function closeFullscreen() {
  var fullscreen = document.querySelector('.fullscreen');
  fullscreen.style.display = 'none';

  var imageDetailsList = document.querySelectorAll('.image-details');
  imageDetailsList.forEach(function (imageDetails) {
      imageDetails.style.display = 'none';
  });
}
