

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


}

function showSignIn(event) {
    event.preventDefault();

    var signIn = document.getElementById("sign-in-id");
    signIn.style.display = 'block';

    var signUp = document.getElementById("sign-up-id");
    signUp.style.display = 'none';

    var resetPassword = document.getElementById("reset-password-id");
    resetPassword.style.display = 'none';

    var userSection = document.getElementById("user-section-id");
    userSection.style.display = 'none';

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

