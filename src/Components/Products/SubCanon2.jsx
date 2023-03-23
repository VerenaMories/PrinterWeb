import SubCanon2Mobile from "../../ComponentsMobile/Products/SubCanon2";
import SubCanon2Web from "../../ComponentsWeb/Products/SubCanon2";
import { isMobile } from "react-device-detect";

export default isMobile ? SubCanon2Mobile : SubCanon2Web;
