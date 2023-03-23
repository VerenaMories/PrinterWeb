import Canon8Mobile from "../../ComponentsMobile/Products/Canon8";
import Canon8Web from "../../ComponentsWeb/Products/Canon8";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon8Mobile : Canon8Web;
