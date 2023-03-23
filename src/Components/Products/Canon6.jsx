import Canon6Mobile from "../../ComponentsMobile/Products/Canon6";
import Canon6Web from "../../ComponentsWeb/Products/Canon6";

export default window.innerWidth <= 800 ? Canon6Mobile : Canon6Web;
