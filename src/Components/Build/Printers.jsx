import PrintersMobile from "../../ComponentsMobile/Build/Printers";
import PrintersWeb from "../../ComponentsWeb/Build/Printers";
import { isMobile } from "react-device-detect";

export default isMobile ? PrintersMobile : PrintersWeb;
