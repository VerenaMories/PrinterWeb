import SubCanon7Mobile from "../../ComponentsMobile/Products/SubCanon7";
import SubCanon7Web from "../../ComponentsWeb/Products/SubCanon7";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanon7Mobile : SubCanon7Web;
