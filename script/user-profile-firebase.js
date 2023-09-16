
// Initialize Firebase app


firebase.initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = firebase.auth();


// Initialize Firebase Storage 
//const storage = firebase.storage();

// Use the 'storage' variable in your code
// For example:
//const storageRef = storage.ref(`user-profile-photos/${user.uid}`);


const errorMessage = document.getElementById('sign-in-message');
const signinBtn = document.getElementById('signin-btn');
signinBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  // Sign in with email and password
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Check if user email is verified
      if (userCredential.user.emailVerified) {
        // User signed in successfully
        const user = userCredential.user;
        console.log(`User ${user.email} signed in successfully.`);
        displayUserProfile(user);
        closeSignIn(event);
        storeUserData(user);
      } else {
        // Email not verified, display error message
        const errorMessageText = 'Please verify your email before signing in.';
        console.error(errorMessageText);
        errorMessage.textContent = errorMessageText;
      }
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessageText = error.message;
      console.error(`Error: ${errorCode} - ${errorMessageText}`);
      errorMessage.textContent = `Error: ${errorCode} - ${errorMessageText}`;
    });
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    // Create a reference to the Google Sign-In button
    const googleSignInButton = document.getElementById('google-signin-button');

    // Add an event listener to the button to trigger Google Sign-In
    googleSignInButton.addEventListener('click', () => {
      // Sign in with Google
      firebase.auth().signInWithPopup(googleAuthProvider)
        .then((result) => {
          // Successful sign-in
          const user = result.user;
          console.log(`Signed in as ${user.displayName}`);
          displayUserProfile(user);
        closeSignIn(event);
        storeUserData(user);
        })
        .catch((error) => {
          // Handle sign-in errors
          console.error(error);
        });
    });






    const phoneSignInButton = document.getElementById('phone-signin-button');
    const phoneInput = document.getElementById('phone-input');
    const sendCodeButton = document.getElementById('send-code-button');
    const verificationCodeInput = document.getElementById('verification-code-input');
    const verifyCodeButton = document.getElementById('verify-code-button');

    // Firebase phone sign-in
   

    // Add an event listener to the phone sign-in button
    phoneSignInButton.addEventListener('click', (e) => {
      e.preventDefault();
      phoneInput.style.display = 'block';
      sendCodeButton.style.display = 'block';

    //   var signIn = document.getElementById("sign-in-id");
    // signIn.style.display = 'block';

      // Hide the verification code input and verify code button
      verificationCodeInput.style.display = 'none';
      verifyCodeButton.style.display = 'none';
    });

    // Add an event listener to the send code button
    sendCodeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const phoneNumber = phoneInput.value;
      const appVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
        size: 'invisible'
      });

      auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS verification sent
          console.log('SMS verification sent to ' + phoneNumber);
          // Display the verification code input and verify code button
          verificationCodeInput.style.display = 'block';
          verifyCodeButton.style.display = 'block';

          // Store the confirmation result for later use
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Handle errors, e.g., invalid phone number
          console.error(error);
        });
    });

    // Add an event listener to the verify code button
    verifyCodeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const verificationCode = verificationCodeInput.value;

      // Use the confirmation result from the previous step
      window.confirmationResult
        .confirm(verificationCode)
        .then((userCredential) => {
          // User signed in successfully
          const user = userCredential.user;
          console.log('User signed in with phone number: ' + user.phoneNumber);
        })
        .catch((error) => {
          // Handle errors, e.g., incorrect verification code
          console.error(error);
        });
    });




    window.fbAsyncInit = function() {
      FB.init({
        appId: "288276540507981",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v13.0"
      });
    };

    const facebookLoginButton = document.getElementById('facebook-login-button');

    facebookLoginButton.addEventListener('click', () => {
      // Initiate Facebook login
      FB.login(function(response) {
        if (response.authResponse) {
          // Facebook login successful, now authenticate with Firebase
          const accessToken = response.authResponse.accessToken;
          const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
    
          // Sign in to Firebase using Facebook credentials
          firebase.auth().signInWithCredential(credential)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log('Logged in with Facebook:', user.displayName);
            })
            .catch((error) => {
              console.error('Firebase login error:', error);
            });
        } else {
          // User canceled Facebook login or encountered an error
          console.log('Facebook login canceled or error:', response.status);
        }
      }, { scope: 'email' }); // You can specify additional permissions here
    });
    




// Store user information in local storage
function storeUserData(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Retrieve user information from local storage
function getUserData() {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}


const user = getUserData();
if (user) {
  // User is signed in, you can access the user's information
  console.log(`Signed in as: ${user.email}`);
  displayUserProfile(user);

} else {
  // User is not signed in
  console.log('User not signed in.');
}





















// Add sign up event listener
const signUpBtn = document.getElementById('signup-btn');
signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('sign-up-email').value;
  const password = document.getElementById('sign-up-password').value;
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const middleName = document.getElementById('middle-name').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const photo = document.getElementById('photo').files[0]; // Assuming an input field of type "file" for selecting the photo
  const dateOfBirth = document.getElementById('date-of-birth').value;

  // Password validation
  if (password.length < 6) {
    document.getElementById('sign-up-message').textContent = 'Password should be at least 6 characters long.';
    return;
  }

  // Sign up with email and password
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log(`User ${user.email} signed up successfully.`);

      // Update additional user profile information
      const profileUpdates = {
        displayName: `${firstName} ${middleName} ${lastName}`,
        photoURL: null, // Placeholder, we'll upload the photo separately
        phoneNumber: phoneNumber,
        //userDateOfBirth:dateOfBirth,
      };

      user.updateProfile(profileUpdates)
        .then(() => {
          // Profile information updated successfully
          console.log('User profile updated successfully.');

          // Upload the photo if provided
          if (photo) {
            const storageRef = storage.ref(`user-profile-photos/${user.uid}`);
            storageRef.put(photo)
              .then(() => {
                // Photo uploaded successfully
                console.log('Profile photo uploaded successfully.');

                // Get the download URL of the uploaded photo
                storageRef.getDownloadURL()
                  .then((photoURL) => {
                    // Update the user's profile with the photo URL
                    user.updateProfile({
                      photoURL: photoURL
                    }).then(() => {
                      // Photo URL updated successfully
                      console.log('User profile photo URL updated successfully.');
                      continueSignUp();
                    }).catch((error) => {
                      // Handle errors
                      console.error('Error updating user profile photo URL:', error);
                      continueSignUp();
                    });
                  }).catch((error) => {
                    // Handle errors
                    console.error('Error getting download URL of the uploaded photo:', error);
                    continueSignUp();
                  });
              }).catch((error) => {
                // Handle errors
                console.error('Error uploading profile photo:', error);
                continueSignUp();
              });
          } else {
            // No photo provided, continue sign up process
            continueSignUp();
          }
        })
        .catch((error) => {
          // Handle errors
          console.error('Error updating user profile:', error);
        });

      function continueSignUp() {
        // Send email verification
        user.sendEmailVerification()
          .then(() => {
            // Email verification sent
            console.log('Email verification sent.');
            document.getElementById('sign-up-id').textContent = 'Email verification sent. Verify your email and sign in.';
            setTimeout(() => {
              showSignIn();
            }, 5000); // Redirect after 5 seconds (adjust the delay as needed)
          })
          .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error: ${errorCode} - ${errorMessage}`);
          });
      }
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('sign-up-message').textContent = `Error: ${errorCode} - ${errorMessage}`;
    });
});




























// Password reset email form
const resetEmailForm = document.getElementById('reset-password-id');
const resetEmailButton = document.getElementById('reset-password-button');

const resetEmailMessage = document.getElementById('reset-password-message');

resetEmailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('reset-password-email').value;

  // Send password reset email
  auth.sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent
      //  resetEmailForm.style.display = 'none';
      resetEmailMessage.textContent = 'Password reset email sent. Reset the password from email link and sign-in again';
      // document.getElementById('reset-password-id').classList.remove('dden');
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      resetEmailMessage.textContent = `Error: ${errorCode} - ${errorMessage}`;
    });
});
resetEmailButton.addEventListener('click', () => {
  resetEmailForm.dispatchEvent(new Event('submit'));
});






// Add change password event listener
const changePasswordForm = document.getElementById('change-password-id');
changePasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('change-password-email').value;
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;

  // Re-authenticate the user with their current credentials
  const user = auth.currentUser;
  const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
  user.reauthenticateWithCredential(credential)
    .then(() => {
      // User successfully re-authenticated
      // Change the user's password
      user.updatePassword(newPassword)
        .then(() => {
          // Password updated successfully
          console.log('Password updated successfully.');
          // You can redirect the user to a different page here or display a success message
          document.getElementById('error-message').textContent = 'Password updated successfully.';
          displayUserProfile(user);

          setTimeout(() => {
            signOut();
          }, 5000); // Redirect after 3 seconds (adjust the delay as needed)
          // You can redirect the user to a different page here
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error: ${errorCode} - ${errorMessage}`);
          document.getElementById('error-message').textContent = `Error: ${errorCode} - ${errorMessage}`;
        });
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode} - ${errorMessage}`);
      document.getElementById('error-message').textContent = `Error: ${errorCode} - ${errorMessage}`;
    });
});












var uiConfig = {
  signInSuccessUrl: 'index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);