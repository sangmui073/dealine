import { combineReducers } from "redux";
import { gioHangReducer } from "./GioHangReducer";
import { BugerReducer } from "./BugerReducer";
import { QuanlySinhVienReducer } from "./QuanLySinhVienReducer";
//Nơi chứa store tổng
export const rootReducer = combineReducers({
  // nơi chứa các reducer (store con của ứng dụng)
  gioHangReducer: gioHangReducer,
  BugerReducer: BugerReducer,
  QuanlySinhVienReducer: QuanlySinhVienReducer,
});
