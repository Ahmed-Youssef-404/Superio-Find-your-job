
// hide and show the password
document.getElementById('show-password-checkbox').addEventListener('change', function() {
    // Get the elements by their id
    var passwordInput = document.getElementById('password'); //password input field
    var passwordText = document.getElementById('show-password-label'); //show password checkbox button
    
    if (this.checked) { //if the password checkbox button is checked (متعلم عليه بصح)
        passwordInput.type = 'text'; //changing "passwordInput" filed type to be 'text' instead of 'password'
        passwordText.textContent = 'Hide Password'; //change the "passwordText" to be 'Hide'
    } else { //if the password checkbox button is unchecked (مش متعلم عليه بصح)
        passwordInput.type = 'password'; //changing "passwordInput" filed type to be 'password' instead of 'text'
        passwordText.textContent = 'Show Password'; //change the "passwordText" to be 'Show'
    }
});


// submission failed massage
// get the "Login-form" by it's id and add an EventListener to prevent submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the message div and overlay by their id
  var overlayDiv = document.getElementById("overlay");
  var failed_massage = document.getElementById("message");
  
  // Display the message div and overlay by changing their display style from none to block
  failed_massage.style.display ="block";
  overlayDiv.style.display = "block";
});

function closeMessage() {
    // Get the messages and overlay to close them
    var overlayDiv = document.getElementById("overlay");//overlay
    var messageDiv = document.getElementById("message");//log in to brows
    var messageDiv2 = document.getElementById("message");//login in submission failed message

    // Hide the messages and overlay
    overlayDiv.style.display = "none";
    messageDiv.style.display = "none";
    messageDiv2.style.display = "none";
}