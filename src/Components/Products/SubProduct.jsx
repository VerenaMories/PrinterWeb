import SubProductMobile from "../../ComponentsMobile/Products/SubProduct";
import SubProductWeb from "../../ComponentsWeb/Products/SubProduct";

export default window.innerWidth <= 800 ? SubProductMobile : SubProductWeb;
