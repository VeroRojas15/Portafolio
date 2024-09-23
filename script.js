// JavaScript para el carrusel de criptografía
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
});

function downloadKey() {
    const link = document.createElement('a');
    link.href = 'public_key.txt';  // Asegúrate de que la clave esté en esta ruta
    link.download = 'public_key.txt';
    link.click();
}
