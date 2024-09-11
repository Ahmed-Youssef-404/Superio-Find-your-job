// hide and show the password
document
  .getElementById("show-password-checkbox")
  .addEventListener("change", function () {
    //add event listener to the show password checkbox button
    let passwordInput = document.getElementById("password"); //password input field
    let passwordText = document.getElementById("show-password-label"); //show password checkbox button

    if (this.checked) {
      //it the password checkbox button is checked (متعلم عليه بصح)
      passwordInput.type = "text"; //changing "passwordInput" filed type to be 'text' instead of 'password'
      passwordText.textContent = "Hide Password"; //change the "passwordText" to be 'Hide'
    } else {
      //if the password checkbox button is unchecked (مش متعلم عليه بصح)
      passwordInput.type = "password"; //changing "passwordInput" filed type to be 'password' instead of 'text'
      passwordText.textContent = "Show Password"; //change the "passwordText" to be 'Show'
    }
  });

// show passwords do not match massage (text)
let confirmPasswordValidationMessage2 = document.getElementById(
  "confirm-password-validation-message"
); // Text for validation message
let passwordInput = document.getElementById("password"); // Password input field
let confirmPasswordInput = document.getElementById("confirmPassword"); // Confirm password input field

// Add event listener to the confirm password input field
confirmPasswordInput.addEventListener("keyup", function () {
  let confirmPassword = this.value; // Get the value typed in the confirm password input field
  let password = passwordInput.value; // Get the value typed in the password input field

  let confirmMessage = ""; // Default message (empty when passwords match)

  if (confirmPassword !== password) {
    confirmMessage = "Passwords do not match"; // Set error message when passwords do not match
  }

  // Update the confirm password validation message
  confirmPasswordValidationMessage2.textContent = confirmMessage;
});

// password validation (constraints)
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\s]{8,}$/; //password constraints
let passwordMessage = ""; //String variable to store the password constraints message
let confirmPasswordValidationMessage = document.getElementById("should"); //the div in the 'submission-message' that will hold the password constraints

passwordInput.addEventListener("keyup", function () {
  //add event listener to the password input field

  let password = this.value; //get the value typed in the password field

  if (!passwordRegex.test(password)) {
    // Verify whether the password is under constraints
    passwordMessage = "Password must contain at least:<br>";
    passwordMessage += "• One lowercase letter (a-z)<br>";
    passwordMessage += "• One uppercase letter (A-Z)<br>";
    passwordMessage += "• One digit (0-9)<br>";
    passwordMessage += "• 8 characters long<br>";
    passwordMessage += "• Do not contain spaces";
  }

  confirmPasswordValidationMessage.innerHTML = passwordMessage; //add the constrains to the '#should' div in the 'submission-message'
});

// Prevent form submission if password is invalid or passwords don't match

// get the failed message, overlay and the form by their id
let messageDiv2 = document.getElementById("submission-message");
let overlayDiv = document.getElementById("overlay");
let confirmPasswordValidationMessage3 = document.getElementById("match"); //the div in the 'submission-message' that will hold the 'Passwords do not match' text

let signupForm = document.getElementById("signup-form"); // get the form by the id
signupForm.addEventListener("submit", function (event) {
  // add even listener to the form tho prevent the submission
  let password = passwordInput.value; //variable holds the the constraints
  let confirmPassword = confirmPasswordInput.value; //get the value typed in the confirm password field


    //if password is invalid (doesn't meat the constraints) or passwords don't mach: enter this if statement (which will prevent submission)

    if (!passwordRegex.test(password)) {
      event.preventDefault(); //even listener to prevent submission
      //if password is invalid (doesn't meat the constraints) even if they are mach, enter this if statement
      confirmPasswordValidationMessage3.innerHTML = ""; //clear the 'Passwords do not match' message (to make it doesn't appear)
      confirmPasswordValidationMessage.innerHTML = passwordMessage; //make the #should massage text the password constraints
      //to appear the submission-message and the overlay
      messageDiv2.style.display = "block";
      document.getElementById("overlay").style.display = "block";
    } else if (confirmPassword !== password) {
      event.preventDefault(); //even listener to prevent submission
      //if passwords don't mach (but the password is valid)
      confirmPasswordValidationMessage.innerHTML = ""; //clear the password constraints text (to make it doesn't appear)
      confirmPasswordValidationMessage3.innerHTML = "Passwords do not match"; // make the '#match' div text to 'Passwords do not match'
      //to appear the submission-message and the overlay
      messageDiv2.style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }else{
        event.preventDefault();
        document.getElementById("overlay").style.display = "block";
        document.getElementById("message").style.display = "block";
    }


  // Display the message div and overlay by changing their display style from none to block
  //   failed_massage.style.display = "block";
  //   overlayDiv.style.display = "block";



  //note that there isn't an "else" because if password is valid and passwords mach we wouldn't have entered the if statement and submission wouldn't be prevented
  //لو الباسورد صالح والباسوردين متطابقين مكناش دخلنا ال أف ستاتمينت أصلا وكانت عملية ال سبميشن نجحت عادي
});

// end of Prevent form submission if password is invalid or passwords don't match code

function closeMessage() {
  // Get the messages and overlay to close them
  let overlayDiv = document.getElementById("overlay"); //overlay
  let messageDiv = document.getElementById("message"); //log in to brows
  let messageDiv2 = document.getElementById("submission-message"); //login in submission failed message

  // Hide the messages and overlay
  overlayDiv.style.display = "none";
  messageDiv.style.display = "none";
  messageDiv2.style.display = "none";
}
