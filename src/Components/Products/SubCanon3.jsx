import SubCanon3Mobile from "../../ComponentsMobile/Products/SubCanon3";
import SubCanon3Web from "../../ComponentsWeb/Products/SubCanon3";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanon3Mobile : SubCanon3Web;
