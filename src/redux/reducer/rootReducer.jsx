import { combineReducers } from "redux";
import { gioHangReducer } from "./GioHangReducer";
//Nơi chứa store tổng
export const rootReducer = combineReducers({
  // nơi chứa các reducer (store con của ứng dụng)
  gioHangReducer: gioHangReducer,
});
