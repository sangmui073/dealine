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
// import CouresDetail from "./BaiTapELaning/CouresDetail";
import BaitapElarning from "./BaiTapELaning/BaitapElarning";
import SingUp from "./BaiTapELaning/SingUp";
import SignIn from "./BaiTapELaning/SignIn";
import { Component } from "react";
import { connect } from "react-redux";
import { Sign } from "./redux/reducer/Action/Type";
import BtTaiXiuRedux from "./BaiTapTaiXiuRedux/BtTaiXiuRedux";
import DressingRoom from "./BaiTapDressingRoom/DressingRoom";
const userSign = localStorage.getItem("user");
class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: Sign,
      payload: JSON.parse(userSign),
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
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
            <Route path="/baiTapDoiMauXe" component={Doimauxe} />
            <Route path="/baiTapQuanLySVRedux" component={BaiTapQLSVRedux} />
            <Route path="/Coures" component={BaitapElarning} />
            <Route path="/Singup" component={SingUp} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/baitapTXredux" component={BtTaiXiuRedux} />
            <Route path="/baitapDressingRoom" component={DressingRoom} />
            <Route path="/" component={""} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
