// Initialize Firebase with your configuration
const firebaseConfig = {
    // Your Firebase configuration here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Add event listener to the menu toggle button
  const menuToggleBtn = document.querySelector('.menu-toggle-btn');
  const container = document.querySelector('.container');
  
  menuToggleBtn.addEventListener('click', () => {
    container.classList.toggle('show-sidebar');
  });
  
  // Add event listeners to the mode selection buttons
  const passengerModeBtn = document.getElementById('passenger-mode');
  const driverModeBtn = document.getElementById('driver-mode');
  
  passengerModeBtn.addEventListener('click', () => {
    // Handle logic for passenger mode
    console.log('Passenger mode selected');
  });
  
  driverModeBtn.addEventListener('click', () => {
    // Handle logic for driver mode
    console.log('Driver mode selected');
  });
  
  // You can add your own JavaScript logic and functionality here
  