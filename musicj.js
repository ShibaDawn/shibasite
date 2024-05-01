function playAudio(id) {
    document.getElementById(id).play();
  }
  function pauseAudio(id) {
    document.getElementById(id).pause();
  }
  
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

pauseButton.disabled = true;


playButton.addEventListener('click', () => {
  pauseButton.disabled = false;
  playButton.disabled = true;
});


pauseButton.addEventListener('click', () => {
  playButton.disabled = false;
  pauseButton.disabled = true;
});