import IndustriesMobile from "../../ComponentsMobile/Industries/Industries";
import IndustriesWeb from "../../ComponentsWeb/Industries/Industries";
import { isMobile } from "react-device-detect";

export default isMobile ? IndustriesMobile : IndustriesWeb;
