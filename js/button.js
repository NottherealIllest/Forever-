const button = document.querySelector(".btn");
const audio = new Audio("./sounds/Nina-Simone-Do-I-Move-You.mp3");
const playerIndicator = document.querySelector(".player-indicator circle");
const buttonIcon = document.querySelector(".btn-icon");

const circumfrence = playerIndicator.r.baseVal.value * 2 * Math.PI;

playerIndicator.style.strokeDasharray = circumfrence;
playerIndicator.style.strokeDashoffset = circumfrence;

console.log(playerIndicator, circumfrence);

audio.addEventListener("loadedmetadata", (e) => {
    button.disabled = false;
    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            buttonIcon.innerHTML = `
      <rect width="5" height="38" fill="#ccc"/>
      <rect x="14" width="5" height="38" fill="#ccc"/>
      `;
            buttonIcon.setAttribute("viewBox", "0 0 19 38");
            buttonIcon.setAttribute("height", "24");
            buttonIcon.setAttribute("width", "12");
            // button.innerText = "Pause";
        } else {
            audio.pause();
            buttonIcon.innerHTML = `
      <path d="M19.1293 14.4571C20.0992 15.2571 20.0992 16.7429 19.1293 17.5429L3.27257 30.6213C1.96809 31.6973 0 30.7694 0 29.0784L0 2.92157C0 1.23063 1.96809 0.302743 3.27257 1.37866L19.1293 14.4571Z" fill="#ccc"/>
      `;
            buttonIcon.setAttribute("viewBox", "0 0 20 32");
            buttonIcon.setAttribute("height", "19.2");
            buttonIcon.setAttribute("width", "12");
            // button.innerText = "Play";
        }
    });
});

audio.addEventListener("timeupdate", (e) => {
    const currentTime = e.path[0].currentTime;
    const duration = e.path[0].duration;
    const playedDurationCircumfrence =
        circumfrence - (currentTime / duration) * circumfrence;

    console.log(playedDurationCircumfrence);
    playerIndicator.style.strokeDashoffset = playedDurationCircumfrence;
});