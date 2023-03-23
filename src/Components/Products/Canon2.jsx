import Canon2Mobile from "../../ComponentsMobile/Products/Canon2";
import Canon2Web from "../../ComponentsWeb/Products/Canon2";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon2Mobile : Canon2Web;
