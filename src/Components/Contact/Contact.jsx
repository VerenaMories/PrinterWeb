import ContactMobile from "../../ComponentsMobile/Contact/Contact";
import ContactWeb from "../../ComponentsWeb/Contact/Contact";
import { isMobile } from "react-device-detect";

export default isMobile ? ContactMobile : ContactWeb;
