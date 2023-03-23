import SubProduct6Mobile from "../../ComponentsMobile/Products/SubProduct6";
import SubProduct6Web from "../../ComponentsWeb/Products/SubProduct6";
import { isMobile } from "react-device-detect";

export default isMobile ? SubProduct6Mobile : SubProduct6Web;
