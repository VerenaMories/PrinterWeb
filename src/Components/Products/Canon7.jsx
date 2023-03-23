import Canon7Mobile from "../../ComponentsMobile/Products/Canon7";
import Canon7Web from "../../ComponentsWeb/Products/Canon7";

export default window.innerWidth <= 800 ? Canon7Mobile : Canon7Web;
