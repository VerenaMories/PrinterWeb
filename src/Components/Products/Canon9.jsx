import Canon9Mobile from "../../ComponentsMobile/Products/Canon9";
import Canon9Web from "../../ComponentsWeb/Products/Canon9";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon9Mobile : Canon9Web;
