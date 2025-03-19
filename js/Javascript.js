document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropbtn");
    const dropdownMenu = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", (event) => {
        event.preventDefault(); 
        dropdownMenu.classList.toggle("show");
    });

    // Cacher le menu si on clique ailleurs
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});


let index = 0;
function moveSlide(step) {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel img");
    index = (index + step + slides.length) % slides.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;}
function autoSlide() {
    moveSlide(1);
}
setInterval(autoSlide, 5000);
