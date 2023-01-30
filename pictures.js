
const hearts = document.querySelectorAll(".heart-img");
const title = document.querySelector("h1");
const text = document.querySelector("p");

hearts.forEach((heart, index) => {
  heart.addEventListener("mouseover", () => {
    heart.style.transform = `rotate(${(index + 1) * 45}deg)`;
  });
  heart.addEventListener("mouseout", () => {
    heart.style.transform = `rotate(0deg)`;
  });
});

title.addEventListener("mouseover", () => {
  title.style.opacity = 1;
  title.style.transform = `translateY(0px)`;
});

text.addEventListener("mouseover", () => {
  text.style.opacity = 1;
  text.style.transform = `translateY(0px)`;
});

