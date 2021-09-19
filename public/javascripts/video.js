const btnPlay = document.querySelector('#play-video-btn');
const btnPause = document.querySelector('#pause-video-btn');
const contVideo = document.getElementById('vision-video');
btnPlay.classList.remove('hidden');
btnPause.classList.add('hidden');

// Not Implemented
// Just didnt work
/*
btnPlay.addEventListener('onclick', playVideo);
btnPause.addEventListener('onclick', pauseVideo);
*/

function playVideo() {
  btnPlay.classList.toggle('hidden');
  btnPause.classList.toggle('hidden');
  contVideo.play();
}

function pauseVideo() {
  btnPlay.classList.toggle('hidden');
  btnPause.classList.toggle('hidden');
  contVideo.pause();
}
