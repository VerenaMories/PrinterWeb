import Canon5Mobile from "../../ComponentsMobile/Products/Canon5";
import Canon5Web from "../../ComponentsWeb/Products/Canon5";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon5Mobile : Canon5Web;
