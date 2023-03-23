import SubProduct5Mobile from "../../ComponentsMobile/Products/SubProduct5";
import SubProduct5Web from "../../ComponentsWeb/Products/SubProduct5";

export default window.innerWidth <= 800 ? SubProduct5Mobile : SubProduct5Web;
