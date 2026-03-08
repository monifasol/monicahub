
import { loadAnimations } from './animations.mjs';
import { initNavigation } from './navigation.mjs';

window.addEventListener('DOMContentLoaded', function () {

	const loader = document.getElementById('loader');
	const loadedContent = document.getElementById('loadedContent');

	// 1,5 seconds of Loading, to let all elements in the page finish loading
	setTimeout( () => {

		document.body.classList.add('loaded')
		loader.classList.add('loaded') 
		loadedContent.classList.add('loaded')

		loadAnimations()
		initNavigation()

	}, 1500)

}, false);


// Perfect documentation for JS Modules:
// https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a
