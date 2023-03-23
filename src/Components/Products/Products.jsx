import ProductsMobile from "../../ComponentsMobile/Products/Products";
import ProductsWeb from "../../ComponentsWeb/Products/Products";

export default window.innerWidth <= 800 ? ProductsMobile : ProductsWeb;
