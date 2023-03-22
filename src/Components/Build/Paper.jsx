import PaperMobile from "../../ComponentsMobile/Build/Paper";
import PaperWeb from "../../ComponentsWeb/Build/Paper";
import { isMobile } from "react-device-detect";

export default isMobile ? PaperMobile : PaperWeb;
