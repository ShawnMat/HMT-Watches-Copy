const images = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;


images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  images[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  images[index].classList.add("active");
  dots[index].classList.add("active");
}


function nextSlide() {
  let i = (index + 1) % images.length;
  showSlide(i);
}

function prevSlide() {
  let i = (index - 1 + images.length) % images.length;
  showSlide(i);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}


document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

showSlide(index);
startAutoSlide();


//Scroll Gallery 1
const slider = document.querySelector(".watch-images");
const cards = document.querySelectorAll(".watch-cont");

const gap = 40; 
const cardWidth = cards[0].offsetWidth + gap;

document.getElementById("next2").addEventListener("click", () => {
  slider.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });
});

document.getElementById("prev2").addEventListener("click", () => {
  slider.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });
});

//Scroll Gallery 2

const slider2 = document.querySelector(".collection-watches");
const cards2 = document.querySelectorAll(".watch-cont");

const gap2 = 40; 
const cardWidth2 = cards2[0].offsetWidth + gap2;

document.getElementById("next3").addEventListener("click", () => {
  slider2.scrollBy({
    left: cardWidth2,
    behavior: "smooth"
  });
});

document.getElementById("prev3").addEventListener("click", () => {
  slider2.scrollBy({
    left: -cardWidth2,
    behavior: "smooth"
  });
});
