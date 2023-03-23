import BuildMobile from "../../ComponentsMobile/Build/Build";
import BuildWeb from "../../ComponentsWeb/Build/Build";

export default window.innerWidth <= 800 ? BuildMobile : BuildWeb;
