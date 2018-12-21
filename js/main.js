'use strict';

// Function to play the sounds from the drumkit when key is pressed
const playSound = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
};

// Function to animate the page when key is pressed
const animatePage = e => {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!key) return;
	key.classList.add('playing');
	window.addEventListener('transitionend', () => {
		key.classList.remove('playing');
	});
};

// Add event listener to trigger playSound and animatePage on keydown
window.addEventListener('keydown', e => {
	playSound(e);
	animatePage(e);
});
