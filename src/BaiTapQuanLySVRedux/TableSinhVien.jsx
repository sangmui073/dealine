import React, { Component } from "react";
import { connect } from "react-redux";
class TableSinhVien extends Component {
  render() {
    return (
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã SV</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Điện Thoại</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangSV.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.soDT}</td>
                <td>{sv.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangSV: state.QuanlySinhVienReducer.mangSV,
  };
};
export default connect(mapStateToProps)(TableSinhVien);
