let index = 0;

function moveSlide(step) {
  const slides = document.querySelector(".carrusel-colab");
  const dots = document.querySelectorAll(".dot");

  index += step;
  if (index > 1) index = 0;
  if (index < 0) index = 1;

  slides.style.transform = `translateX(${-index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function currentSlide(n) {
  index = n;
  moveSlide(0);
}
