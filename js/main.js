window.addEventListener('load', () => {
    let currentlyShowing = 0;
    const overlays = [...document.querySelectorAll('.greeting-header')];
    const loaderImg = document.querySelector('.loader-img');
    const logoText = document.querySelector('.navText');
    const letShow = document.querySelector('.dont-show');


    const animInterval = setInterval(() => {
        const currentOverlay = overlays[currentlyShowing];
        currentOverlay.querySelector('.greeting').style.display = 'none';
        currentOverlay.classList.add('fade-out');
        currentlyShowing++;

        setTimeout(() => {
            currentOverlay.style.display = 'none';
        }, 300)


        if (currentlyShowing === overlays.length) {
            clearInterval(animInterval);

            setTimeout(() => {
                loaderImg.classList.add('active');

                setTimeout(() => {
                    loaderImg.style.opacity = 0;
                    loaderImg.style.touchAction = 'none';
                    logoText.style.display = 'none';
                    letShow.style.display = 'block';

                }, 3500);

            }, 300)
        }

    }, 700);

});

(() => {
    const windowWidth = window.innerWidth;
    
    if(windowWidth < 1000){
        document.body.innerHTML = `<div class="not-allowed">
            <h2>You'll need a wider screen to view this app</h2>
        </div>`;
    }
    
    window.addEventListener('resize', e => {
        const windowWidth = window.innerWidth;
        const notAllowed = document.querySelector('.not-allowed');
    
        if(windowWidth < 1000 && !notAllowed){
            window.location.reload();
        }

        if(windowWidth > 999 && notAllowed){
            window.location.reload();
        }
    
    })
})();
