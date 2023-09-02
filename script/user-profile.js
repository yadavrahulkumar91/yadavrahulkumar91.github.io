

function openSignIn(event) {
    event.preventDefault(); // Prevent the default form submission behavior or link navigation
    var modalBg = document.getElementById("modal-bg");
    modalBg.style.display = "flex";

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'block';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';


} 

function closeSignIn(event) {
    event.preventDefault(); // Prevent the default form submission behavior or link navigation
    var modalBg = document.getElementById("modal-bg");
    modalBg.style.display = "none";
}

function showUserSection(event) {
    event.preventDefault(); // Prevent the default form submission behavior or link navigation
    var modalBg = document.getElementById("modal-bg");
    modalBg.style.display = "flex";

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'none';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'block';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'none';


}

function showSignIn(event) {
  //  event.preventDefault();

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'block';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'none';

    console.log("Sign in button clicked!");
}

function showSignUp(event) {
    event.preventDefault();

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'none';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'block';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'none';

    console.log("Sign up button clicked!");
}

function showResetPassword(event) {
    event.preventDefault();

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'none';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'block';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';


    console.log("Reset Password button clicked!");
}





function showChangePassword(event) {
    event.preventDefault();

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'none';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';

    var changePassword = document.getElementById("change-password-id");
    changePassword.style.display = 'block';


    console.log("Reset Password button clicked!");
}









// Function to sign out the user and remove stored data
function signOut() {
	// Sign out the user from Firebase
	auth.signOut()
		.then(() => {
			// Remove the stored user data from local storage
			localStorage.removeItem('user');
			console.log('User signed out successfully.');
			closeSignIn(event);
			closeUserProfile();
			var changePassword = document.getElementById("change-password-id");
			changePassword.style.display = 'none';
		})
		.catch((error) => {
			console.error('Error occurred while signing out:', error);
		});
}

function closeUserProfile() {
	userProfile = document.getElementById("user-profile");
	userProfile.style.display = "none";

	signInSignUp = document.getElementById("sign-in-sign-up");
	signInSignUp.style.display = "block";

}


function displayUserProfile(user) {
	// Hide sign-in button
	//  signInButton.style.display = "none";

	// Update user profile details
	/*
	profilePic.src = user.photoURL;
	profilePic.style.display = "block";
	username.textContent = user.displayName;
	username.style.display = "block";
	*/
	// Show user profile
	userProfile = document.getElementById("user-profile");
	userProfile.style.display = "block";

	signInSignUp = document.getElementById("sign-in-sign-up");
	signInSignUp.style.display = "none";

	userEmail = document.getElementById("user-email");
	userEmail.textContent = user.email;

	// Get the displayName element from the HTML
const userDisplayName = document.getElementById("user-display-name");

// Set the user's displayName as the content of the userDisplayName element
userDisplayName.textContent = user.displayName;
 


// Get the userPhoneNumber element from the HTML
const userPhoneNumber = document.getElementById("user-phone-number");

// Set the user's phone number as the content of the userPhoneNumber element
userPhoneNumber.textContent = user.phoneNumber;





// Get the dateOfBirth element from the HTML
//const userDateOfBirth = document.getElementById("user-date-of-birth");

//const formattedDateOfBirth = user.userDateOfBirth.toDateString();

// Set the user's dateOfBirth as the content of the userDateOfBirth element
//userDateOfBirth.textContent = user.userDateOfBirth;


console.log("Phone Number:", user.phoneNumber);
// console.log("Date of Birth:", user.userDateOfBirth);





	//	localStorage.setItem(userEmail);
	const userEmailElements = document.getElementsByClassName("user-email");

	for (let i = 0; i < userEmailElements.length; i++) {
		userEmailElements[i].textContent = user.email;
	}

}


