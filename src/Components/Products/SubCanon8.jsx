import SubCanon8Mobile from "../../ComponentsMobile/Products/SubCanon8";
import SubCanon8Web from "../../ComponentsWeb/Products/SubCanon8";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanon8Mobile : SubCanon8Web;
