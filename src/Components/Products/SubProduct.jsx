import SubProductMobile from "../../ComponentsMobile/Products/SubProduct";
import SubProductWeb from "../../ComponentsWeb/Products/SubProduct";
import { isMobile } from "react-device-detect";

export default isMobile ? SubProductMobile : SubProductWeb;
