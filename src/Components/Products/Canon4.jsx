import Canon4Mobile from "../../ComponentsMobile/Products/Canon4";
import Canon4Web from "../../ComponentsWeb/Products/Canon4";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon4Mobile : Canon4Web;
