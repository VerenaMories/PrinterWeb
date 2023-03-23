import CanonMobile from "../../ComponentsMobile/Products/Canon";
import CanonWeb from "../../ComponentsWeb/Products/Canon";
import { isMobile } from "react-device-detect";

export default isMobile ? CanonMobile : CanonWeb;
