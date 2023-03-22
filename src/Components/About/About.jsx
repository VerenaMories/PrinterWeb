import AboutMobile from "../../ComponentsMobile/About/About";
import AboutWeb from "../../ComponentsWeb/About/About";
import { isMobile } from "react-device-detect";

export default isMobile ? AboutMobile : AboutWeb;
