import AboutMobile from "../../ComponentsMobile/About/About";
import AboutWeb from "../../ComponentsWeb/About/About";

export default window.innerWidth <= 800 ? AboutMobile : AboutWeb;
