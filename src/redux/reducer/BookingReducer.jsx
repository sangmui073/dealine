import { DAT_GHE_TICKET, HUY_GHE } from "./Action/Type";
const initialState = {
  gheDangDat: [
    // { soGhe: "5", gia: 7500, daDat: false, maGhe: "A5" },
    // { soGhe: "6", gia: 7500, daDat: false, maGhe: "A6" },
    // { soGhe: "7", gia: 7500, daDat: false, maGhe: "A7" },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE_TICKET:
      const gheDangDatUpdate = [...state.gheDangDat];
      const index = gheDangDatUpdate.findIndex((ghe) => {
        return ghe.maGhe === action.payload.maGhe;
      });
      if (index !== -1) {
        gheDangDatUpdate.splice(index, 1);
      } else {
        gheDangDatUpdate.push(action.payload);
      }
      state.gheDangDat = gheDangDatUpdate;
      return { ...state };
    case HUY_GHE:
      state.gheDangDat = state.gheDangDat.filter((ghe) => {
        return ghe.maGhe !== action.payload.maGhe;
      });
      return { ...state };
    default:
      return state;
  }
};
export default bookingReducer;
