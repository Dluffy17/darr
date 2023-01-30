// Add responsive behavior for navigation menu
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", function() {
  if (!menuOpen) {
    nav.style.display = "block";
    menuBtn.innerHTML = "Close";
    menuOpen = true;
  } else {
    nav.style.display = "none";
    menuBtn.innerHTML = "Menu";
    menuOpen = false;
  }
});

// Add animation to header text
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
header.style.opacity = "0";
main.style.opacity = "0";
footer.style.opacity = "0";

setTimeout(function() {
  header.style.opacity = "1";
  header.style.transform = `translateY(0)`;
  main.style.opacity = "1";
  main.style.transform = `translateY(0)`;
  footer.style.opacity = "1";
  footer.style.transform = `translateY(0)`;
}, 500);
