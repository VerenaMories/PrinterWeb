import SubBuild2Mobile from "../../ComponentsMobile/Build/SubBuild2";
import SubBuild2Web from "../../ComponentsWeb/Build/SubBuild2";

export default window.innerWidth <= 800 ? SubBuild2Mobile : SubBuild2Web;
