import SubProduct2Mobile from "../../ComponentsMobile/Products/SubProduct2";
import SubProduct2Web from "../../ComponentsWeb/Products/SubProduct2";
import { isMobile } from "react-device-detect";

export default isMobile ? SubProduct2Mobile : SubProduct2Web;
