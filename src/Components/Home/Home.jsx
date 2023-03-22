import HomeMobile from "../../ComponentsMobile/Home/Home";
import HomeWeb from "../../ComponentsWeb/Home/Home";
import { isMobile } from "react-device-detect";

export default isMobile ? HomeMobile : HomeWeb;
