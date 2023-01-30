// Add interactive effects
const heartImages = document.querySelectorAll(".heart-img");
heartImages.forEach(img => {
  img.addEventListener("mouseenter", function() {
    this.style.width = "20%";
    this.style.transform = `rotate(360deg)`;
  });
  img.addEventListener("mouseleave", function() {
    this.style.width = "10%";
    this.style.transform = `rotate(0deg)`;
  });
});

// Add animations
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

setTimeout(function() {
  heading.style.opacity = "1";
  heading.style.transform = `translateY(0)`;
  paragraph.style.opacity = "1";
  paragraph.style.transform = `translateY(0)`;
}, 500);