const keys = document.querySelectorAll(`.piano-key`);

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

const playAudio = (key, audio) => {
 audio.currentTime = 0;
 audio.play();
 key.classList.add('playing');
};

const handlePlayKey = (e) => {
 const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 if (!audio) return;
 playAudio(key, audio);
};

const handlePlayClick = (e) => {
 let key;
 keys.forEach((el) => {
  if (el === e.target) key = el;
 });
 if (!key) return;
 const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
 if (!audio) return;
 playAudio(key, audio);
};

function removeTransition(e) {
 this.classList.remove('playing');
}

window.addEventListener('keydown', handlePlayKey);
window.addEventListener('click', handlePlayClick);
