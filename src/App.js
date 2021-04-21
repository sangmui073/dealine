import Baitapcomponent from "./BaiTapComponent/Baitapcomponent";
import Doimauxe from "./BaiTapDoiMauXe/Doimauxe";
import Baitapphonecallback from "./BaiTapDienThoaiCallBack/Baitapphonecallback";
import Listphim from "./BaiTapMangPhim/Listphim";
import Baitapstate from "./BaiTapState/Baitapstate";
import BaitapGlassesApp from "./BaiTapThuKinh/BaitapGlassesApp";
import BaitapcomponentDienThoai from "./BaitapcomponentDienThoai/BaitapcomponentDienThoai";

import BaiTapBuger from "./BaiTapBuger/BaiTapBuger";
import BaiTapQLSVRedux from "./BaiTapQuanLySVRedux/BaiTapQLSVRedux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";

import data from "./Data/data.json";
import HeaderBaiTap from "./Component/Header";
function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        <HeaderBaiTap />
        <Switch>
          <Route path="/bugerRedux" component={BaiTapBuger} />
          <Route path="/btGioHangRedux" component={BaiTapGioHangRedux} />
          <Route path="/btPhoneCallBack" component={Baitapphonecallback} />
          <Route
            path="/btComponentDienThoai"
            component={BaitapcomponentDienThoai}
          />
          <Route path="/baiTapState" component={Baitapstate} />
          <Route path="/btGlass" component={BaitapGlassesApp} />
          <Route path="/baiTapDoiMauXe" />
          <Route path="/baiTapQuanLySVRedux" component={BaiTapQLSVRedux} />
          <Route path="/" component={""} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
