import SubBuildMobile from "../../ComponentsMobile/Build/SubBuild";
import SubBuildWeb from "../../ComponentsWeb/Build/SubBuild";
import { isMobile } from "react-device-detect";

export default isMobile ? SubBuildMobile : SubBuildWeb;
