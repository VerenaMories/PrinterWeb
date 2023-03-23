import Canon7Mobile from "../../ComponentsMobile/Products/Canon7";
import Canon7Web from "../../ComponentsWeb/Products/Canon7";
import { isMobile } from "react-device-detect";

export default isMobile ? Canon7Mobile : Canon7Web;
