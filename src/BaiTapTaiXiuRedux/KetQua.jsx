import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    const { luaChon, soBanThang, soBanChoi } = this.props.ketQua;

    return (
      <>
        <div>
          bạn chọn :{" "}
          <span className="text-danger">{luaChon ? "Tài" : "Xĩu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{soBanChoi}</span>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.TaiXiuReducer.ketqua,
  };
};
export default connect(mapStateToProps)(KetQua);
