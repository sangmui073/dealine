import React, { Component } from "react";

import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";
export default class BaiTapQLSVRedux extends Component {
  // componentDidMount(){
  //   // this.props.dispatch(fetchUsers())
  //Ta gọi dispatch cái asyn action tại đây và trong asyn action
  //Ta mới dispatch 1 action creator lên redux (root)
  // }
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
