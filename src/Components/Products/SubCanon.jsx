import SubCanonMobile from "../../ComponentsMobile/Products/SubCanon";
import SubCanonWeb from "../../ComponentsWeb/Products/SubCanon";

export default window.innerWidth <= 800 ? SubCanonMobile : SubCanonWeb;
