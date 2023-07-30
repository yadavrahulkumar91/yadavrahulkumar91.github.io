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



document.getElementById("myButton").addEventListener("click", function () {
  const imageDetailContainers = document.querySelectorAll(".image-detail");
  for (const container of imageDetailContainers) {
    const h3Elements = container.querySelectorAll("h3");
    for (const h3Element of h3Elements) {
      // Toggle the visibility of the h3 elements within the container
      if (h3Element.style.display === "none") {
        h3Element.style.display = "block";
      } else {
        h3Element.style.display = "none";
      }
    }
  }
});