
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4f2qv32PaDfYdo5m8qdN_pxGSEX6QUhw",
    authDomain: "gamechanger-f5da7.firebaseapp.com",
    databaseURL: "https://gamechanger-f5da7-default-rtdb.firebaseio.com",
    projectId: "gamechanger-f5da7",
    storageBucket: "gamechanger-f5da7.appspot.com",
    messagingSenderId: "358268649157",
    appId: "1:358268649157:web:3b517e0f495a4395b8faac",
    measurementId: "G-H8CE37BHFV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
