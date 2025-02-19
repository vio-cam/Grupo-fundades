let slideIndex = 0;

function showSlide(index) {
  let slides = document.querySelectorAll('.carousel-img');
  let dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.style.display = 'none';
    dots[i].classList.remove('active');
  });

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

showSlide(slideIndex);


//shadow style//
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header.navegador");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
