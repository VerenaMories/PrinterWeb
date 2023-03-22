import NavbarMobile from "../../ComponentsMobile/Navbar/Navbar";
import NavbarWeb from "../../ComponentsWeb/Navbar/Navbar";
import { isMobile } from "react-device-detect";

export default isMobile ? NavbarMobile : NavbarWeb;
