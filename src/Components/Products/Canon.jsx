import CanonMobile from "../../ComponentsMobile/Products/Canon";
import CanonWeb from "../../ComponentsWeb/Products/Canon";

export default window.innerWidth <= 800 ? CanonMobile : CanonWeb;
