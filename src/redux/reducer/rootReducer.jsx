import { combineReducers } from "redux";
import { gioHangReducer } from "./GioHangReducer";
import { BugerReducer } from "./BugerReducer";
import { QuanlySinhVienReducer } from "./QuanLySinhVienReducer";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";
import TaiXiuReducer from "./BaiTapTXReducer";
import DressingRoomReducer from "./DressingRomReducer";
import oanTuTiReducer from "./BaiTapGameOanTuXi";
import bookingReducer from "./BookingReducer";
import todolistReducer from "./TodolistReducer";
//Nơi chứa store tổng
export const rootReducer = combineReducers({
  // nơi chứa các reducer (store con của ứng dụng)
  gioHangReducer: gioHangReducer,
  BugerReducer: BugerReducer,
  QuanlySinhVienReducer: QuanlySinhVienReducer,
  CourseReducer: CourseReducer,
  UserReducer: UserReducer,
  TaiXiuReducer: TaiXiuReducer,
  DressingRoomReducer: DressingRoomReducer,
  oanTuTiReducer: oanTuTiReducer,
  bookingReducer: bookingReducer,
  todolistReducer: todolistReducer,
});
