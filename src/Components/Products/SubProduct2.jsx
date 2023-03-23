import SubProduct2Mobile from "../../ComponentsMobile/Products/SubProduct2";
import SubProduct2Web from "../../ComponentsWeb/Products/SubProduct2";

export default window.innerWidth <= 800 ? SubProduct2Mobile : SubProduct2Web;
