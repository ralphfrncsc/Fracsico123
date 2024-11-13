// Function to toggle the mobile menu on and off
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Change header background on scroll for sticky effect
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.7)';
    }
};

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    const hamburger = document.querySelector('.hamburger-menu');
    
    // Toggle the 'active' class for menu visibility
    navList.classList.toggle('active');
    
    // Toggle the 'open' class for hamburger animation
    hamburger.classList.toggle('open');
}