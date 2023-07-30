function toggleDiv() {
  const div = document.getElementById("toggleDiv");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

// const navBtn = document.getElementById('nav-button');
// navBtn.addEventListener('click', () => toggleDiv());

// Button back to top
const btnBack = document.getElementById("back");
btnBack.addEventListener("click", () => topFunction());

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 750
  ) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
}

//* When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


