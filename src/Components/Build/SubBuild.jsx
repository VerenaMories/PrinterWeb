import SubBuildMobile from "../../ComponentsMobile/Build/SubBuild";
import SubBuildWeb from "../../ComponentsWeb/Build/SubBuild";

export default window.innerWidth <= 800 ? SubBuildMobile : SubBuildWeb;
