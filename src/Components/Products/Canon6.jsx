import Canon6Mobile from "../../ComponentsMobile/Products/Canon6";
import Canon6Web from "../../ComponentsWeb/Products/Canon6";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon6Mobile : Canon6Web;
