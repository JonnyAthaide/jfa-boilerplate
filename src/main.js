import "./design-system/main.scss";
import "./components";
import "./layouts";
import "./features";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import { bootstrap, Dom } from "./foundation";
import homeHtml from "./pages/Home/Home.html?raw";


const app = bootstrap();

const outlet = Dom.query("#page-outlet");

if (outlet) {
    app.router.register("/", () => Dom.html(outlet, homeHtml));
}
