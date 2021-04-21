import React, { Component } from "react";

import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";
export default class BaiTapQLSVRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center bg-dark text-white py-3">
          Bài Tập Quản Lý Sinh Viên Redux
        </h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
