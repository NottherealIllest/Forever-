window.addEventListener('load', () => {
    let currentlyShowing = 0;
    const overlays = [...document.querySelectorAll('.greeting-header')];

    setInterval(() => {
        const currentOverlay = overlays[currentlyShowing];
        currentOverlay.querySelector('.greeting').style.display = 'none';
        currentOverlay.classList.add('fade-out');
        currentlyShowing++;

        setTimeout(() => {
            currentOverlay.style.display = 'none';
        }, 300)
    }, 500);
});