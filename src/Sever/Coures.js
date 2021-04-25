import axios from "axios";
import { eLearningURL } from "../Common/domain";
export default class Coures {
  getCouse = () => {
    return axios({
      method: "GET",
      url: `${eLearningURL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    });
  };
  getCouseById = (id) => {
    return axios({
      method: "GET",
      url: `${eLearningURL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  };
}
