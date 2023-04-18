// Get elements
const pinButton = document.querySelector('.pin-button');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

// Add event listener to pin button
pinButton.addEventListener('click', () => {
  // Toggle pinned class on sidebar
  sidebar.classList.toggle('pinned');
});

// Add event listener to main content
main.addEventListener('mouseover', () => {
  // Add hide-sidebar class to main content when user hovers over it
  main.classList.add('hide-sidebar');
});

main.addEventListener('mouseout', () => {
  // Remove hide-sidebar class from main content when user stops hovering over it
  main.classList.remove('hide-sidebar');
});

// Add event listener to window resize
window.addEventListener('resize', () => {
  // Remove pinned class from sidebar and hide-sidebar class from main content when window is resized
  sidebar.classList.remove('pinned');
  main.classList.remove('hide-sidebar');
});
