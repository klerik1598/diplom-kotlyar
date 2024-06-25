document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".uniform-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (img.classList.contains("fullscreen")) {
        img.classList.remove("fullscreen");
        // document.body.style.overflow = "";
      } else {
        images.forEach(image => image.classList.remove("fullscreen"));
        img.classList.add("fullscreen");
        // document.body.style.overflow = "hidden";
      }
    });
  });
}); 

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();