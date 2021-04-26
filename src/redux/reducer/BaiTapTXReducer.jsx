// const listXucXac = [
//   { hinhAnh: "./img/gameXucXac/1.png", value: 1 },
//   { hinhAnh: "./img/gameXucXac/2.png", value: 2 },
//   { hinhAnh: "./img/gameXucXac/3.png", value: 3 },
//   { hinhAnh: "./img/gameXucXac/4.png", value: 4 },
//   { hinhAnh: "./img/gameXucXac/5.png", value: 5 },
//   { hinhAnh: "./img/gameXucXac/6.png", value: 6 },
// ];
const initialState = {
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", value: 1 },
    { hinhAnh: "./img/gameXucXac/2.png", value: 2 },
    { hinhAnh: "./img/gameXucXac/3.png", value: 3 },
  ],
  ketqua: {
    luaChon: true,
    soBanThang: 0,
    soBanChoi: 0,
  },
};
// const randomXc = () => {
//   return Math.floor(Math.random() * 6);
// };
const TaiXiuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOICE":
      const newKetQua = { ...state.ketqua };
      newKetQua.luaChon = action.payload;
      state.ketqua = newKetQua;
      return { ...state };
    case "LAC_XUC_XAC":
      // const newListXc = [...state.mangXucXac];
      // for (let i = 0; i < 3; i++) {
      //   newListXc[i] = listXucXac[randomXc()];
      // }
      // const newKQ = { ...state.ketqua };
      // newKQ.soBanChoi += 1;
      // const tongDiem = newListXc.reduce((num, value) => {
      //   return num + value.value;
      // }, 0);
      // if (tongDiem > 10) {
      //   if (newKQ.luaChon) {
      //     newKQ.soBanThang += 1;
      //   }
      // } else {
      //   if (!newKQ.luaChon) {
      //     newKQ.soBanThang += 1;
      //   }
      // }
      // return { ...state, mangXucXac: newListXc, ketqua: newKQ };

      state.mangXucXac = action.payload;
      return { ...state };
    case "TINH_DIEM":
      console.log("tinh diem");
      const tongDiem = state.mangXucXac.reduce((num, value) => {
        return num + value.value;
      }, 0);
      const newKQ = { ...state.ketqua };
      if (tongDiem > 10) {
        if (newKQ.luaChon) {
          newKQ.soBanThang += 1;
        }
      } else {
        if (!newKQ.luaChon) {
          newKQ.soBanThang += 1;
        }
      }
      newKQ.soBanChoi += 1;
      state.ketqua = newKQ;
      return { ...state };
    default:
      return state;
  }
};
export default TaiXiuReducer;
