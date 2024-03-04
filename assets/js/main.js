// Get the button:
let btn = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {isShow()};

function isShow() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function getTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}