import HomeMobile from "../../ComponentsMobile/Home/Home";
import HomeWeb from "../../ComponentsWeb/Home/Home";

export default window.innerWidth <= 800 ? HomeMobile : HomeWeb;
