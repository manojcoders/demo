
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






let stopUpdating = false; 

function getRandomNumber() {
    return Math.floor(Math.random() * 9999) + 1;
}

function updateNumbers() {
    if (!stopUpdating) {
        document.getElementById('random-number-1').innerText = getRandomNumber();
    
    document.getElementById('random-number-2').innerText = getRandomNumber();
    document.getElementById('random-number-3').innerText = getRandomNumber();
    document.getElementById('random-number-4').innerText = getRandomNumber();
    }
}


setTimeout(() => {
    stopUpdating = true; 
}, 50000);

setInterval(updateNumbers, 1000);


const cardWrapper = document.querySelector('.card-wrapper');
const cardWidth = 320; 
let currentTranslation = 0;
const totalCards = cardWrapper.children.length;
const maxTranslation = -(cardWidth * (totalCards - 1)); 

document.getElementById('scrollLeft').addEventListener('click', function() {
    
    currentTranslation = Math.min(currentTranslation + cardWidth, 0);
    cardWrapper.style.transform = `translateX(${currentTranslation}px)`;
});

document.getElementById('scrollRight').addEventListener('click', function() {
    
    currentTranslation = Math.max(currentTranslation - cardWidth, maxTranslation);
    cardWrapper.style.transform = `translateX(${currentTranslation}px)`;
});


// window.onscroll = function() { toggleNavbar() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function toggleNavbar() {
//     if (window.pageYOffset > sticky) {
//         navbar.classList.add("fixed-top");
//         navbar.classList.add("shadow");
//     } else {
//         navbar.classList.remove("fixed-top");
//         navbar.classList.remove("shadow");
//     }
// }