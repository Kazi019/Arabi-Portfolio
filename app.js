const html = document.querySelector('html');
const moon = document.querySelector('.moon');

moon.addEventListener("click", () => {
    html.classList.toggle('dark');
    moon.classList.toggle('fa-moon');
    moon.classList.toggle('fa-sun');
});