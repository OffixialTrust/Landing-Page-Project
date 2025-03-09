// query selctors' template
const qS = (query) => document.querySelector(query);
const qSA = (query) => document.querySelectorAll(query);

// Show/hide menu 
if (window.matchMedia("(max-width: 767px)").matches) {
  const openMenu = qS("#open-menu");
const topNav = qS("#top-nav");
const closeMenu = qS("#close-menu");
const overlay = qS("#overlay");
const navLinks = Array.from(qSA("#top-nav a"));

openMenu.addEventListener("click", () => {
  topNav.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", removeNav);

navLinks.forEach(i => i.addEventListener("click", removeNav));

function removeNav() {
  topNav.style.display = "none";
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
  overlay.style.display = "none";
}

}

// Working on the slider
if (window.matchMedia("(max-width: 767px)").matches) {
  
const sliderContainer = Array.from(qSA(".slider-container"));
sliderContainer[0].style.display = "block";

let slideIndex = 0;

function display(i) {
  sliderContainer.forEach(element => element.style.display = "none");
  sliderContainer[i].style.display = "block";
}

// initializing a timer
let sliderTimer = setInterval(slideRight, 3500);

function slideRight() {
  clearInterval(sliderTimer);
  slideIndex++;
  if (slideIndex >= sliderContainer.length) {
    slideIndex = 0;
  }
  display(slideIndex);
  // resetting the interval
sliderTimer = setInterval(slideRight, 3500);
}

function slideLeft() {
  clearInterval(sliderTimer);
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderContainer.length - 1;
  }
  display(slideIndex);
  // resetting the interval
sliderTimer = setInterval(slideRight, 3500);
}

qS("#slider-button-left").addEventListener("click", slideLeft);

qS("#slider-button-right").addEventListener("click", slideRight);

}

function validateEmail() {
  const email = qS("#email");
  const errorMessage = qS("#error-message");
  const pattern = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!(pattern.test(email.value))) {
    errorMessage.style.display = "block";
    email.style.border = "1px solid red";
  } else  {
    errorMessage.style.display = "none";
    email.style.border = "none";
  }
}
