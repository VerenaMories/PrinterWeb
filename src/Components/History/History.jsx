import HistoryMobile from "../../ComponentsMobile/History/History";
import HistoryWeb from "../../ComponentsWeb/History/History";

export default window.innerWidth <= 800 ? HistoryMobile : HistoryWeb;
