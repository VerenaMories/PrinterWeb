import ContactMobile from "../../ComponentsMobile/Contact/Contact";
import ContactWeb from "../../ComponentsWeb/Contact/Contact";

export default window.innerWidth <= 800 ? ContactMobile : ContactWeb;
