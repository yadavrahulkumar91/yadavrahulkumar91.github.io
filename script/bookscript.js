// Function to create and append elements
function createAndAppendElement(parent, elementType, attributes) {
  const element = document.createElement(elementType);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  parent.appendChild(element);
  return element;
}

const headElement = document.head;
var headerElement = document.getElementsByTagName('header')[0];
var mainElement = document.getElementsByTagName('main')[0];

const firebaseAppCompat = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js',
  async: false,
});

const firebaseAuthCompat = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth-compat.js',
  async: false,
});

const firebaseApp = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js',
  async: false,
});

const firebaseAuth = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js',
  async: false,
});

const firebaseDatabase = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/8.6.5/firebase-database.js',
  async: false,
});

const firebaseStorage = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js',
  async: false,

});

const quillScript = createAndAppendElement(headElement, 'script', {
  type: 'text/javascript',
  src: 'https://cdn.quilljs.com/1.2.6/quill.min.js'
});

const scripts = [
  {
    type: 'text/javascript',
    src: 'https://polyfill.io/v3/polyfill.min.js?features=es6',
    async: false,
  },
  {
    type: 'text/javascript',
    src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    async: false,
  },
  {
    type: 'text/javascript',
    src: 'https://www.gstatic.com/charts/loader.js',
    async: false,
  },


];



scripts.forEach((script) => {
  createAndAppendElement(headElement, 'script', script);
});

var linkElement = createAndAppendElement(headElement, 'link', {
  type: 'text/css',
  rel: 'stylesheet',
  href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css'
});

createAndAppendElement(headElement, 'link', {
  type: 'text/css',
  rel: 'stylesheet',
  href: 'https://cdn.quilljs.com/1.2.6/quill.snow.css'
});




// Create the first <div> with class "left-box-container".
const leftBoxContainer = createAndAppendElement(headerElement, 'div', {
  class: 'left-box-container'
});

// Create the first nested <div> with class "unit-left-lesson".
const unitLeftLesson = createAndAppendElement(leftBoxContainer, 'div', {
  class: 'unit-left-lesson'
});

// Create the two nested <div> elements inside "unit-left-lesson".
const unitLeft = createAndAppendElement(unitLeftLesson, 'div', {
  class: 'unit-left'
});
const lessonNoBox = createAndAppendElement(unitLeftLesson, 'div', {
  class: 'lesson-no-box',
  id: 'lesson-no-id' // Add the ID attribute here.
});

// Create the second <div> with class "unit-name-box" and ID "unit-name-id".
const unitNameBox = createAndAppendElement(leftBoxContainer, 'div', {
  class: 'unit-name-box',
  id: 'unit-name-id'
});

// Create the second main <div> with class "header-center".
const headerCenter = createAndAppendElement(headerElement, 'div', {
  class: 'header-center'
});

// Create the <div> with class "lesson-name" and ID "lesson-name-id" inside "header-center".
const lessonName1 = createAndAppendElement(headerCenter, 'div', {
  class: 'lesson-name',
  id: 'lesson-name-id'
});

// Create the <div> with class "tab-bar" inside "header-center".
const tabBar = createAndAppendElement(headerCenter, 'div', {
  class: 'tab-bar'
});

// Create the individual tab <div> elements inside "tab-bar" with event listeners.
const tabs = ['Home', 'Questions', 'Videos', 'Remnant memory'];
tabs.forEach(tabText => {
  const tab = createAndAppendElement(tabBar, 'div', {
    class: 'tab',
    onclick: `openContainer(event, '${tabText.toLowerCase()}')`
  });
  tab.textContent = tabText;
});




// Create the modal background
const modalBg = createAndAppendElement(headerElement, 'div', {
  class: 'modal-bg',
  id: 'modal-bg',
});

// Create the modal container
const modal = createAndAppendElement(modalBg, 'div', {
  class: 'modal',
});

// Create the close button
const closeButton = createAndAppendElement(modal, 'div', {
  class: 'close-button',
  style: 'cursor:pointer',
  onclick: closeSignIn(),
});
closeButton.textContent = '×'; // Add the close button content

// Create the iframe for user profile
const iframe = createAndAppendElement(modal, 'iframe', {
  src: '/user-profile.html',
});

function openSignIn(event) {
  // event.preventDefault(); 
  var modalBg = document.getElementById("modal-bg");
  // modalBg.style.display = "flex";
}
function closeSignIn(event) {
  // event.preventDefault(); 
  var modalBg = document.getElementById("modal-bg");
  modalBg.style.display = "none";
}





// Add an event listener to check when both scripts are loaded
let firebaseAppCompatLoaded = false;
let firebaseAuthCompatLoaded = false;

firebaseAppCompat.onload = () => {
  firebaseAppCompatLoaded = true;
  // checkFirebaseLoaded();
};

firebaseAuthCompat.onload = () => {
  firebaseAuthCompatLoaded = true;
  // checkFirebaseLoaded();
};



firebaseApp.onload = () => {
  firebaseAppCompatLoaded = true;

};

firebaseAuth.onload = () => {
  firebaseAuthCompatLoaded = true;

};

firebaseDatabase.onload = () => {
  firebaseAppCompatLoaded = true;

};

firebaseStorage.onload = () => {
  firebaseAuthCompatLoaded = true;

};


let firebaseAppLoaded = false;
let firebaseAuthLoaded = false;
let firebaseDatabaseLoaded = false;
let firebaseStorageLoaded = false;
let quillScriptLoaded = false;

firebaseApp.onload = () => {
  firebaseAppLoaded = true;
  checkFirebaseLoaded();
};

firebaseAuth.onload = () => {
  firebaseAuthLoaded = true;
  checkFirebaseLoaded();
};

firebaseDatabase.onload = () => {
  firebaseDatabaseLoaded = true;
  checkFirebaseLoaded();
};

firebaseStorage.onload = () => {
  firebaseStorageLoaded = true;
  checkFirebaseLoaded();
};

quillScript.onload = () => {
  quillScriptLoaded = true;
  // checkFirebaseLoaded();
};



function checkFirebaseLoaded() {
  if (firebaseAppCompatLoaded && firebaseAuthCompatLoaded && firebaseStorageLoaded) {
    initializeFirebase();
  }
}

function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyD4f2qv32PaDfYdo5m8qdN_pxGSEX6QUhw",
    authDomain: "gamechanger-f5da7.firebaseapp.com",
    databaseURL: "https://gamechanger-f5da7-default-rtdb.firebaseio.com",
    projectId: "gamechanger-f5da7",
    storageBucket: "gamechanger-f5da7.appspot.com",
    messagingSenderId: "358268649157",
    appId: "1:358268649157:web:8439649bc02f3a6cb8faac",
    measurementId: "G-QBH1QYTY8V"
  };
  firebase.initializeApp(firebaseConfig);

  initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function (accessToken) {
          // document.getElementById('sign-in-status').textContent = 'Signed in';
          // document.getElementById('sign-in').textContent = 'Sign out';
          // document.getElementById('account-details').textContent = JSON.stringify({
          //   displayName: displayName,
          //   email: email,
          //   emailVerified: emailVerified,
          //   phoneNumber: phoneNumber,
          //   photoURL: photoURL,
          //   uid: uid,
          //   accessToken: accessToken,
          //   providerData: providerData
          // }, null, '  ');

        });
        // Create the user's name
        // const userName = createAndAppendElement(clickableProfile, 'div', {
        //   class: 'user-name',
        //   onclick: 'showUserSection(event)'
        // });

        // userName.textContent = displayName;

        // });


      } else {
        photoURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      }
      // Function to show user section
      // Create the user-section div
      const userSectionDiv = createAndAppendElement(headerElement, 'div', {
        id: 'user-section'
      });

      // Create the clickable profile
      const clickableProfile = createAndAppendElement(userSectionDiv, 'div', {
        class: 'clickable-profile'
      });

      // Create the user's circular photo
      const userPhoto = createAndAppendElement(clickableProfile, 'img', {
        src: photoURL,
        class: 'user-photo',
        alt: 'User Photo',
        onclick: openSignIn(),
      });


      
      
const database = firebase.database();
const commentForm = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const commentText = document.getElementById('comment').value;

  const newCommentRef = database.ref('comments').push();
  newCommentRef.set({
    name: name,
    email: email,
    comment: commentText,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });

  commentForm.reset();
});

function loadComments() {
  const commentsRef = database.ref('comments');
  commentsRef.on('value', (snapshot) => {
    commentSection.innerHTML = '';

    snapshot.forEach((childSnapshot) => {
      const comment = childSnapshot.val();
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = `<strong>${comment.name}</strong> (${comment.email}): ${comment.comment}`;
      commentSection.appendChild(commentDiv);
    });
  });
}

loadComments();





    
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var options = {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          ['link', 'image', 'video'],                 // Insert options
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean']                                         // remove formatting button
        ],
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true
        }
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow',
    };
    var quill = new Quill('#editor', options);


    const saveButton1 = document.getElementById("save1");
    saveButton1.addEventListener("click", () => {

      if (user) {
        var noteContent = quill.root.innerHTML; // Get the HTML content from Quill

        // Upload the content to Firebase Cloud Storage
        var storageRef = firebase.storage().ref();
        var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');
        // Adjust the path based on the user's UID

        userNoteRef.putString(noteContent, 'raw').then(function (snapshot) {
          console.log('Note content uploaded successfully!');
        });


      } else {
        console.log("User not authenticated.");
      }


    });
    if (user) {
      // Retrieve the note content for the user
      var storageRef = firebase.storage().ref();
      var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');

      userNoteRef.getDownloadURL().then(function (url) {
        fetch(url)
          .then(response => response.text())
          .then(content => {
            quill.clipboard.dangerouslyPasteHTML(content);
          });
      });
    } else {
      console.log("User not authenticated.");
    }



    const noteTextarea = document.getElementById("note");
    const saveButton = document.getElementById("save");

    let currentUser = null;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        currentUser = user;
        initUserNote();
      } else {
        // window.location.replace("login.html"); 
        // Redirect to login page if not logged in
      }
    });

    saveButton.addEventListener("click", () => {
      const userNote = noteTextarea.value;
      if (currentUser) {
        database.ref("user-notes/" + currentUser.uid).set({
          note: userNote
        });
      }
    });

    function initUserNote() {
      const userNoteRef = database.ref("user-notes/" + currentUser.uid);
      userNoteRef.once("value")
        .then(snapshot => {
          const userData = snapshot.val();
          if (userData && userData.note) {
            noteTextarea.value = userData.note;
          }
        });
    }




    },
    function (error) {
        console.log(error);
    });
  };

  window.addEventListener('load', function () {
    initApp()
  });

}

// function checkFirebaseLoaded1() {
//   if (firebaseAppLoaded && firebaseAuthLoaded && firebaseDatabaseLoaded) {
    // const noteTextarea = document.getElementById("note");
    // const saveButton = document.getElementById("save");

    // let currentUser = null;
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     currentUser = user;
    //     initUserNote();
    //   } else {
    //     // window.location.replace("login.html"); 
    //     // Redirect to login page if not logged in
    //   }
    // });

    // saveButton.addEventListener("click", () => {
    //   const userNote = noteTextarea.value;
    //   if (currentUser) {
    //     database.ref("user-notes/" + currentUser.uid).set({
    //       note: userNote
    //     });
    //   }
    // });

    // function initUserNote() {
    //   const userNoteRef = database.ref("user-notes/" + currentUser.uid);
    //   userNoteRef.once("value")
    //     .then(snapshot => {
    //       const userData = snapshot.val();
    //       if (userData && userData.note) {
    //         noteTextarea.value = userData.note;
    //       }
    //     });
    // }
//   }
// }


// function checkFirebaseLoaded2() {
//   if (quillScriptLoaded && firebaseStorageLoaded) {

    // const firebaseConfig = {
    //   apiKey: "AIzaSyD4f2qv32PaDfYdo5m8qdN_pxGSEX6QUhw",
    //   authDomain: "gamechanger-f5da7.firebaseapp.com",
    //   databaseURL: "https://gamechanger-f5da7-default-rtdb.firebaseio.com",
    //   projectId: "gamechanger-f5da7",
    //   storageBucket: "gamechanger-f5da7.appspot.com",
    //   messagingSenderId: "358268649157",
    //   appId: "1:358268649157:web:8439649bc02f3a6cb8faac",
    //   measurementId: "G-QBH1QYTY8V"
    // };
    // firebase.initializeApp(firebaseConfig);


    // var storage = firebase.storage();
    // var storageRef = storage.ref();
    // var options = {
    //   modules: {
    //     toolbar: [
    //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //       ['blockquote', 'code-block'],

    //       ['link', 'image', 'video'],                 // Insert options
    //       [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //       [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    //       [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    //       [{ 'direction': 'rtl' }],                         // text direction

    //       [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //       [{ 'font': [] }],
    //       [{ 'align': [] }],

    //       ['clean']                                         // remove formatting button
    //     ],
    //     history: {
    //       delay: 2000,
    //       maxStack: 500,
    //       userOnly: true
    //     }
    //   },
    //   placeholder: 'Compose an epic...',
    //   readOnly: false,
    //   theme: 'snow',
    // };
    // var quill = new Quill('#editor', options);


    // const saveButton1 = document.getElementById("save1");
    // saveButton1.addEventListener("click", () => {

    //   if (user) {
    //     var noteContent = quill.root.innerHTML; // Get the HTML content from Quill

    //     // Upload the content to Firebase Cloud Storage
    //     var storageRef = firebase.storage().ref();
    //     var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');
    //     // Adjust the path based on the user's UID

    //     userNoteRef.putString(noteContent, 'raw').then(function (snapshot) {
    //       console.log('Note content uploaded successfully!');
    //     });


    //   } else {
    //     console.log("User not authenticated.");
    //   }


    // });
    // if (user) {
    //   // Retrieve the note content for the user
    //   var storageRef = firebase.storage().ref();
    //   var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');

    //   userNoteRef.getDownloadURL().then(function (url) {
    //     fetch(url)
    //       .then(response => response.text())
    //       .then(content => {
    //         quill.clipboard.dangerouslyPasteHTML(content);
    //       });
    //   });
    // } else {
    //   console.log("User not authenticated.");
    // }




//   }
// }




//MathJax configuration for single dollar sign
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};


//form

// Get all elements with the class "choices"
const choicesElements = document.querySelectorAll('.choices');

// Loop through each element and attach the new div
choicesElements.forEach(element => {

  const div1 = document.createElement('div');
  div1.className = 'answer';

  // Insert the new div element after the current element
  element.insertAdjacentElement('afterend', div1);
});



const choicesElements1 = document.querySelectorAll('.choices');

choicesElements1.forEach((choicesElement, index) => {
  const choiceElements = choicesElement.querySelectorAll('.choice');

  choiceElements.forEach((choiceElement, choiceIndex) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'q' + (index + 1);
    input.value = String.fromCharCode(97 + choiceIndex);

    // Attach the onchange event handler to the input element
    input.onchange = function () {
      checkAnswer(input);
    };

    choiceElement.insertBefore(input, choiceElement.firstChild);
  });
});


// Get all elements with the class 'question'
const questionElements = document.querySelectorAll('.question');

// Loop through each 'question' element
questionElements.forEach((questionElement, index) => {
  // Create a new 'div' element with the class 'question-child'
  const questionChildElement = document.createElement('div');
  questionChildElement.classList.add('question-child');

  // Move the content of the 'question' element to the 'question-child' element
  questionChildElement.innerHTML = questionElement.innerHTML;

  // Replace the content of the 'question' element with the 'question-child' element
  questionElement.innerHTML = '';
  questionElement.appendChild(questionChildElement);
});







function checkAnswer(button) {
  var questionDiv = button.closest('.questions');
  var selectedAnswer = questionDiv.querySelector('input[type="radio"]:checked');
  var solutionDiv = questionDiv.querySelector('.solution');

  if (selectedAnswer === null) {
    alert('Please select an answer.');
    return;
  }

  if (selectedAnswer.value === questionDiv.dataset.answer) {
    questionDiv.classList.remove('incorrect-answer');
    questionDiv.classList.add('correct-answer');
  } else {
    questionDiv.classList.remove('correct-answer');
    questionDiv.classList.add('incorrect-answer');
  }
  solutionDiv.style.display = 'block';
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
  sidebarDiv[i] = document.createElement('div');
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


  for (j = 0; j < homeContainerElements.length; j++, a++) {
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
var contentPageLocation = "../content.html";




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
    console.log("Error fetching content.html:", error);
  });






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









// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();
// const commentForm = document.getElementById('commentForm');
// const commentSection = document.getElementById('commentSection');

// commentForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const commentText = document.getElementById('comment').value;

//   const newCommentRef = database.ref('comments').push();
//   newCommentRef.set({
//     name: name,
//     email: email,
//     comment: commentText,
//     timestamp: firebase.database.ServerValue.TIMESTAMP
//   });

//   commentForm.reset();
// });

// function loadComments() {
//   const commentsRef = database.ref('comments');
//   commentsRef.on('value', (snapshot) => {
//     commentSection.innerHTML = '';

//     snapshot.forEach((childSnapshot) => {
//       const comment = childSnapshot.val();
//       const commentDiv = document.createElement('div');
//       commentDiv.innerHTML = `<strong>${comment.name}</strong> (${comment.email}): ${comment.comment}`;
//       commentSection.appendChild(commentDiv);
//     });
//   });
// }

// loadComments();






// const noteTextarea = document.getElementById("note");
// const saveButton = document.getElementById("save");

// let currentUser = null;

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     currentUser = user;
//     initUserNote();
//   } else {
//     // window.location.replace("login.html");
//     // Redirect to login page if not logged in
//   }
// });

// saveButton.addEventListener("click", () => {
//   const userNote = noteTextarea.value;
//   if (currentUser) {
//     database.ref("user-notes/" + currentUser.uid).set({
//       note: userNote
//     });
//   }
// });

// function initUserNote() {
//   const userNoteRef = database.ref("user-notes/" + currentUser.uid);
//   userNoteRef.once("value")
//     .then(snapshot => {
//       const userData = snapshot.val();
//       if (userData && userData.note) {
//         noteTextarea.value = userData.note;
//       }
//     });
// }




// var storage = firebase.storage();
// var storageRef = storage.ref();


// var options = {
//   modules: {
//     toolbar: [
//       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//       ['blockquote', 'code-block'],

//       ['link', 'image', 'video'],                 // Insert options
//       [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
//       [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
//       [{ 'direction': 'rtl' }],                         // text direction

//       [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//       [{ 'font': [] }],
//       [{ 'align': [] }],

//       ['clean']                                         // remove formatting button
//     ],
//     history: {
//       delay: 2000,
//       maxStack: 500,
//       userOnly: true
//     }
//   },
//   placeholder: 'Compose an epic...',
//   readOnly: false,
//   theme: 'snow',
// };
// var quill = new Quill('#editor', options);


// const saveButton1 = document.getElementById("save1");
// saveButton1.addEventListener("click", () => {

//   if (user) {
//     var noteContent = quill.root.innerHTML; // Get the HTML content from Quill

//     // Upload the content to Firebase Cloud Storage
//     var storageRef = firebase.storage().ref();
//     var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');
//     // Adjust the path based on the user's UID

//     userNoteRef.putString(noteContent, 'raw').then(function (snapshot) {
//       console.log('Note content uploaded successfully!');
//     });


//   } else {
//     console.log("User not authenticated.");
//   }


// });
// if (user) {
//   // Retrieve the note content for the user
//   var storageRef = firebase.storage().ref();
//   var userNoteRef = storageRef.child('notes/' + user.uid + '/note1.html');

//   userNoteRef.getDownloadURL().then(function (url) {
//     fetch(url)
//       .then(response => response.text())
//       .then(content => {
//         quill.clipboard.dangerouslyPasteHTML(content);
//       });
//   });
// } else {
//   console.log("User not authenticated.");
// }

