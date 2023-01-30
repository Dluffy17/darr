// Make the website responsive
window.addEventListener("resize", function() {
  if (window.innerWidth < 500) {
    document.querySelector("body").style.fontSize = "12px";
  } else {
    document.querySelector("body").style.fontSize = "16px";
  }
});

// Add fun effects
const heading = document.querySelector("h1");
let angle = 0;
setInterval(function() {
  heading.style.transform = `rotate(${angle}deg)`;
  angle = (angle + 3) % 360;
}, 50);