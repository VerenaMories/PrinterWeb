import IndustriesMobile from "../../ComponentsMobile/Industries/Industries";
import IndustriesWeb from "../../ComponentsWeb/Industries/Industries";

export default window.innerWidth <= 800 ? IndustriesMobile : IndustriesWeb;
