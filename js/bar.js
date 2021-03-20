var bar = [...document.querySelectorAll('.music-bar')];
//var t1 = new TimelineMax({onUpdate:updateUI, repeat:-1})
window.setInterval(function() {
    $(bar).each(function() {
        TweenMax.to(this, 0.2, { height: Math.floor(Math.random() * 40) + 20, ease: Power0.easeNone, yoyo: true });
    });
}, 200);