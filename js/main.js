const playSound = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
};

window.addEventListener('keydown', e => {
	playSound(e);
});
