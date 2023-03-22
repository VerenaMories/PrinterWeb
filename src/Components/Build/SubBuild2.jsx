import SubBuild2Mobile from "../../ComponentsMobile/Build/SubBuild2";
import SubBuild2Web from "../../ComponentsWeb/Build/SubBuild2";
import { isMobile } from "react-device-detect";

export default isMobile ? SubBuild2Mobile : SubBuild2Web;
