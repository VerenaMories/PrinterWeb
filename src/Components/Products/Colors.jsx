import ColorsMobile from "../../ComponentsMobile/Products/Colors";
import ColorsWeb from "../../ComponentsWeb/Products/Colors";
import { isMobile } from "react-device-detect";

export default isMobile ? ColorsMobile : ColorsWeb;
