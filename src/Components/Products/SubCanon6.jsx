import SubCanon6Mobile from "../../ComponentsMobile/Products/SubCanon6";
import SubCanon6Web from "../../ComponentsWeb/Products/SubCanon6";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanon6Mobile : SubCanon6Web;
