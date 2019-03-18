(() =>{
	// stub
	console.log('fired!');

	const sigils 	= 	document.querySelectorAll('.sigil-container'),
		  lightbox 	= 	document.querySelector('.lightbox'),
		  video		=	document.querySelector('video'),
		  lbClose	=	document.querySelector('.lightbox-close');

	function openLightbox() {
		// debugger;
		let targetHouse = this.className.split(" ")[1];

		// ths gives us a lower case house name -> the second class on all of the shields 
		// ie stark, baerthon

		// flip this to uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightbox.classList.add('lightbox-on');
		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);
})();