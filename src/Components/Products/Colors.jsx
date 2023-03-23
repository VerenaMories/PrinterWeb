import ColorsMobile from "../../ComponentsMobile/Products/Colors";
import ColorsWeb from "../../ComponentsWeb/Products/Colors";

export default window.innerWidth <= 800 ? ColorsMobile : ColorsWeb;
