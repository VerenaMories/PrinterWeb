import PaperMobile from "../../ComponentsMobile/Build/Paper";
import PaperWeb from "../../ComponentsWeb/Build/Paper";

export default window.innerWidth <= 800 ? PaperMobile : PaperWeb;
