import NavbarMobile from "../../ComponentsMobile/Navbar/Navbar";
import NavbarWeb from "../../ComponentsWeb/Navbar/Navbar";

export default window.innerWidth <= 800 ? NavbarMobile : NavbarWeb;
