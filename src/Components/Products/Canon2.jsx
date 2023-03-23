import Canon2Mobile from "../../ComponentsMobile/Products/Canon2";
import Canon2Web from "../../ComponentsWeb/Products/Canon2";

export default window.innerWidth <= 800 ? Canon2Mobile : Canon2Web;
