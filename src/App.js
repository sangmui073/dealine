// import Baitapcomponent from "./BaiTapComponent/Baitapcomponent";
// import Doimauxe from "./BaiTapDoiMauXe/Doimauxe";
import Baitapphonecallback from "./BaiTapDienThoaiCallBack/Baitapphonecallback";
import Listphim from "./BaiTapMangPhim/Listphim";
// import Baitapstate from "./BaiTapState/Baitapstate";
// import data from "./Data/data.json";
function App() {
  return (
    <div className="App">
      {/* <Baitapcomponent /> */}
      {/* <Baitapstate /> */}
      {/* <Listphim mangPhim={data} /> */}
      <Baitapphonecallback />
    </div>
  );
}

export default App;
