import "focus-visible";
import "../../stylesheets/common/common.scss";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

//ANCHOR setting up HMR for the dev server.
if (module.hot) {
	module.hot.accept();
}

//ANCHOR navigation

window.addEventListener("resize", updateMenu);

function updateMenu() {
	const menuButton = document.querySelector(".hamburger");
	if (!menuButton) return;

	menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
	const menuButton = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu__list");

	if (menu.classList.contains("menu__list--displayed")) {
		menu.classList.remove("menu__list--displayed");
		menuButton.setAttribute("aria-expanded", "false");
	} else {
		menu.classList.add("menu__list--displayed");
		menuButton.setAttribute("aria-expanded", "true");
	}
}

updateMenu();

//ANCHOR back to top button
window.addEventListener("resize", updateToTop);

function updateToTop() {
	const backButton = document.querySelector(".top-button");
	if (!backButton) return;

	backButton.addEventListener("click", backToTop);
}

function backToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

updateToTop();
