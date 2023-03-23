import Canon8Mobile from "../../ComponentsMobile/Products/Canon8";
import Canon8Web from "../../ComponentsWeb/Products/Canon8";

export default window.innerWidth <= 800 ? Canon8Mobile : Canon8Web;
