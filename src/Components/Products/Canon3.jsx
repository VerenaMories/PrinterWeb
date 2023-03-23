import Canon3Mobile from "../../ComponentsMobile/Products/Canon3";
import Canon3Web from "../../ComponentsWeb/Products/Canon3";

export default window.innerWidth <= 800 ? Canon3Mobile : Canon3Web;
