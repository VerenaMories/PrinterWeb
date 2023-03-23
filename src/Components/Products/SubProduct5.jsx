import SubProduct5Mobile from "../../ComponentsMobile/Products/SubProduct5";
import SubProduct5Web from "../../ComponentsWeb/Products/SubProduct5";
import { isMobile } from "react-device-detect";

export default isMobile ? SubProduct5Mobile : SubProduct5Web;
