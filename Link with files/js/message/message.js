function showMessage() {
  document.getElementById("message").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeMessage() {
  document.getElementById("message").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// ---------------------------------------------------------------------------------------------
