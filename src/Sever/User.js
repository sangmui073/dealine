import Axios from "axios";
import { eLearningURL } from "../Common/domain";

export default class User {
  postUser = (data) => {
    return Axios({
      method: "POST",
      url: `${eLearningURL}/QuanLyNguoiDung/DangKy`,
      data: data,
    });
  };
  SignInUser = (data) => {
    return Axios({
      method: "POST",
      url: `${eLearningURL}/QuanLyNguoiDung/DangNhap`,
      data: data,
    });
  };
}
