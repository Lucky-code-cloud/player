const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector("img"),
    musicName = wrapper.querySelector(".name"),
    musicArtist = wrapper.querySelector(".artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn =wrapper.querySelector("#prev"),
    nextBtn =wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea =wrapper.querySelector(".progress-area"),
    progressBar = progressBar.querySelector("progress-bar");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerHTML =allMusic[indexNumb - 1].name;
    musicArtist.innerHTML =allMusic[indexNumb - 1].artist;
    musicImg.src =`assets/img/${allMusic[indexNumb - 1].src}.png`;
    mainAudio.src =`assets/aud/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
    wrapper.classList.add("paused");
    wrapper.classList.add('rotate');
    playPauseBtn.innerHTML =`<i class = "fa-solid fa-pause"></i>`;
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.add("paused");
    wrapper.classList.add('rotate');
    playPauseBtn.innerHTML =`<i class = "fa-solid fa-play"></i>`;
    mainAudio.pause();
}