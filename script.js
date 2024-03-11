//slider 1

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });
});
// slider 2
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide2");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  document.getElementById("prevBtn2").addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  document.getElementById("nextBtn2").addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });
});

//slider 3

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide3");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  document.getElementById("prevBtn3").addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  document.getElementById("nextBtn3").addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });
});
