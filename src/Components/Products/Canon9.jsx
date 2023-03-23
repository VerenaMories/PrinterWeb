import Canon9Mobile from "../../ComponentsMobile/Products/Canon9";
import Canon9Web from "../../ComponentsWeb/Products/Canon9";

export default window.innerWidth <= 800 ? Canon9Mobile : Canon9Web;
