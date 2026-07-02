// Mobile Navbar Toggle Control
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Interactive "How It's Made" Modal Operations
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');
const menuBoxes = document.querySelectorAll('.menu-container .box');

// Target display references inside the window
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalIngredients = document.getElementById('modalIngredients');
const modalCooking = document.getElementById('modalCooking');

// Handle item click triggers
menuBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Pull hidden attributes from clicked container
        const name = box.getAttribute('data-name');
        const price = box.getAttribute('data-price');
        const ingredients = box.getAttribute('data-ingredients');
        const cooking = box.getAttribute('data-cooking');

        // Inject strings smoothly into modal layout view template
        modalName.textContent = name;
        modalPrice.textContent = price;
        modalIngredients.textContent = ingredients;
        modalCooking.textContent = cooking;

        // Slide modal panel into view window smoothly
        infoModal.classList.add('show');
    });
});

// Close interactive view triggers
closeModal.onclick = () => {
    infoModal.classList.remove('show');
}

// Structural fallback escape routine if background overlay receives direct clicks
window.onclick = (e) => {
    if (e.target === infoModal) {
        infoModal.classList.remove('show');
    }
}