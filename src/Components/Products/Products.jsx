import ProductsMobile from "../../ComponentsMobile/Products/Products";
import ProductsWeb from "../../ComponentsWeb/Products/Products";
import { isMobile } from "react-device-detect";

export default isMobile ? ProductsMobile : ProductsWeb;
