import FooterMobile from "../../ComponentsMobile/Footer/Footer";
import FooterWeb from "../../ComponentsWeb/Footer/Footer";
import { isMobile } from "react-device-detect";

export default isMobile ? FooterMobile : FooterWeb;
