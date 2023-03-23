import Canon3Mobile from "../../ComponentsMobile/Products/Canon3";
import Canon3Web from "../../ComponentsWeb/Products/Canon3";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon3Mobile : Canon3Web;
