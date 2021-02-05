window.addEventListener('load', () => {
    let currentlyShowing = 0;
    const overlays = [...document.querySelectorAll('.greeting-header')];
    const loaderImg = document.querySelector('.loader-img');

    const animInterval = setInterval(() => {
        const currentOverlay = overlays[currentlyShowing];
        currentOverlay.querySelector('.greeting').style.display = 'none';
        currentOverlay.classList.add('fade-out');
        currentlyShowing++;

        setTimeout(() => {
            currentOverlay.style.display = 'none';
        }, 300)

        if(currentlyShowing === overlays.length){
            clearInterval(animInterval);

            setTimeout(() => {
                loaderImg.classList.add('active');

                setTimeout(() => {
                    loaderImg.style.opacity = 0;
                    loaderImg.style.touchAction = 'none';
                }, 3500);
                
            }, 300)
        }
    }, 500);
});