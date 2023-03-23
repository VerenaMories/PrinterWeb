import Canon5Mobile from "../../ComponentsMobile/Products/Canon5";
import Canon5Web from "../../ComponentsWeb/Products/Canon5";

export default window.innerWidth <= 800 ? Canon5Mobile : Canon5Web;
