import FooterMobile from "../../ComponentsMobile/Footer/Footer";
import FooterWeb from "../../ComponentsWeb/Footer/Footer";

export default window.innerWidth <= 800 ? FooterMobile : FooterWeb;
