const overlay = document.querySelector('.greeting-header');
const overlayTwo = document.querySelector('.delay-2');
const overlayThree = document.querySelector('.delay-3');
const overlayFour = document.querySelector('.delay-4');
const overlayFive = document.querySelector('.delay-5');

window.addEventListener('load', () => {
    setTimeout(() => {
        overlay.querySelector('.greeting').style.display = 'none';
        overlay.classList.add('fade-out');

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300)
    }, 500);
});

setTimeout(function() {
    overlayTwo.querySelector('.greeting').style.display = 'none';
    overlayTwo.classList.add('fade-out');

    setTimeout(() => {
        overlayTwo.style.display = 'none';
    }, 300)
}, 1200);


setTimeout(function() {
    overlayThree.querySelector('.greeting').style.display = 'none';
    overlayThree.classList.add('fade-out');

    setTimeout(() => {
        overlayThree.style.display = 'none';
    }, 300)
}, 1800);

setTimeout(function() {
    overlayFour.querySelector('.greeting').style.display = 'none';
    overlayFour.classList.add('fade-out');

    setTimeout(() => {
        overlayFour.style.display = 'none';
    }, 300)
}, 2400);

setTimeout(function() {
    overlayFive.querySelector('.greeting').style.display = 'none';
    overlayFive.classList.add('fade-out');

    setTimeout(() => {
        overlayFive.style.display = 'none';
    }, 300)
}, 32 00);