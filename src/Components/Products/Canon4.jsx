import Canon4Mobile from "../../ComponentsMobile/Products/Canon4";
import Canon4Web from "../../ComponentsWeb/Products/Canon4";

export default window.innerWidth <= 800 ? Canon4Mobile : Canon4Web;
