import PrintersMobile from "../../ComponentsMobile/Build/Printers";
import PrintersWeb from "../../ComponentsWeb/Build/Printers";

export default window.innerWidth <= 800 ? PrintersMobile : PrintersWeb;
