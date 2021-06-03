import "focus-visible";
import "./stylesheets/common/common.scss";

//ANCHOR setting up HMR for the dev server.
if (module.hot) {
	module.hot.accept();
}

//ANCHOR navigation
const menu = document.querySelector(".menu__list");
const menuButton = document.querySelector(".hamburger");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (menu.classList.contains("menu__list--displayed")) {
		menu.classList.remove("menu__list--displayed");
	} else {
		menu.classList.add("menu__list--displayed");
	}
}
