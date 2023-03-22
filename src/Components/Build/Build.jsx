import BuildMobile from "../../ComponentsMobile/Build/Build";
import BuildWeb from "../../ComponentsWeb/Build/Build";
import { isMobile } from "react-device-detect";

export default isMobile ? BuildMobile : BuildWeb;
