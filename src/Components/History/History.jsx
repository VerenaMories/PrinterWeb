import HistoryMobile from "../../ComponentsMobile/History/History";
import HistoryWeb from "../../ComponentsWeb/History/History";
import { isMobile } from "react-device-detect";

export default isMobile ? HistoryMobile : HistoryWeb;
