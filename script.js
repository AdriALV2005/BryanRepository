
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
      showSlide(currentSlide - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
      showSlide(currentSlide + 1);
    });
  });









  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide2'); // Cambiado el selector para el nuevo slider
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    document.getElementById('prevBtn2').addEventListener('click', function() { // Cambiado el ID del botón anterior para el nuevo slider
      showSlide(currentSlide - 1);
    });
  
    document.getElementById('nextBtn2').addEventListener('click', function() { // Cambiado el ID del botón siguiente para el nuevo slider
      showSlide(currentSlide + 1);
    });
  });
  