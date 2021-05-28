import "focus-visible";
import "./stylesheets/common/common.scss";

//ANCHOR setting up HMR for the dev server.
if (module.hot) {
	module.hot.accept();
}
