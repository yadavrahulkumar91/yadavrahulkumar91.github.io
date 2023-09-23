function closeSignIn() {
    // event.preventDefault(); 
    var modalBg = document.getElementById("modal-bg");
    modalBg.style.display = "none";
}

function openSignIn(event) {
    event.preventDefault(); // Prevent the default form submission behavior or link navigation
    var modalBg = document.getElementById("modal-bg");
    modalBg.style.display = "flex";
   
}

// document.getElementById('installButton').addEventListener('click', offline);


function offline(){


  // window.addEventListener('load', () =>{
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  // }
  // )

  alert('App is being installed offline.');
}