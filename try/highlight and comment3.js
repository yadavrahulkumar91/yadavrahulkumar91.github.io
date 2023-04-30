// Initialize Firebase
var firebaseConfig = {
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
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Highlighting functionality
  var highlightButton = document.getElementById('highlight-btn');
  var highlightContent = document.getElementById('highlight-content');
  var highlightColor = 'yellow'; // Default highlight color
  var highlightedText = '';
  
  // Function to set the highlight color
  function setHighlightColor(color) {
    highlightColor = color;
  }
  
  // Event listener for the highlight button click
  highlightButton.addEventListener('click', function() {
    var selection = window.getSelection();
    highlightedText = selection.toString();
    var range = selection.getRangeAt(0);
    var highlightSpan = document.createElement('span');
    highlightSpan.style.backgroundColor = highlightColor;
    highlightSpan.setAttribute('class', 'highlighted-text');
    range.surroundContents(highlightSpan);
  });
  
  // Commenting functionality
  var commentsList = document.getElementById('comments-list');
  var commentForm = document.getElementById('comment-form');
  
  // Function to add a comment to the database
  function addComment(comment) {
    database.ref('comments').push().set({
      text: comment,
      highlightedText: highlightedText,
      highlightColor: highlightColor
    });
  }
  
  // Function to render the comments from the database
  function renderComments(comments) {
    commentsList.innerHTML = '';
    comments.forEach(function(comment) {
      var commentDiv = document.createElement('div');
      commentDiv.setAttribute('class', 'comment');
      var commentText = document.createElement('p');
      commentText.innerHTML = comment.text;
      var commentEditButton = document.createElement('button');
      commentEditButton.innerHTML = 'Edit';
      commentEditButton.setAttribute('data-id', comment.id);
      commentEditButton.setAttribute('class', 'edit-comment-btn');
      commentDiv.appendChild(commentText);
      commentDiv.appendChild(commentEditButton);
      commentsList.appendChild(commentDiv);
    });
  }
  
  // Event listener for the comment form submission
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var commentInput = document.getElementById('comment-input');
    var comment = commentInput.value;
    addComment(comment);
    commentInput.value = '';
  });
  
  // Event listener for the edit comment button click
  commentsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-comment-btn')) {
      var commentId = event.target.getAttribute('data-id');
      var commentText = event.target.parentNode.firstChild.innerHTML;
      var newCommentText = prompt('Enter new comment text:', commentText);
      if (newCommentText !== null) {
        database.ref('comments/' + commentId).update({
          text: newCommentText
        });
      }
    }
  });
  
  // Listen for changes in the database and render the comments
  database.ref('comments').on('value', function(snapshot) {
    var comments = [];
    snapshot.forEach(function(childSnapshot) {
      var comment = childSnapshot.val();
      comment.id = childSnapshot.key;
      comments.push(comment);
    });
    renderComments(comments);
  });
  