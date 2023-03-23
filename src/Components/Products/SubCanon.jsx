import SubCanonMobile from "../../ComponentsMobile/Products/SubCanon";
import SubCanonWeb from "../../ComponentsWeb/Products/SubCanon";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanonMobile : SubCanonWeb;
