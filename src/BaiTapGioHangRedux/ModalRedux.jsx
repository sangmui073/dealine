import React, { Component } from "react";
import { connect } from "react-redux";
class ModalRedux extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          style={{ maxWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Tên SP</td>
                    <td>Hình Ảnh</td>
                    <td>Số Lượng</td>
                    <td>Giá SP</td>
                    <td>Thành Tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.gh.map((phone, index) => {
                    return (
                      <tr key={index}>
                        <td>{phone.maSP}</td>
                        <td>{phone.tenSP}</td>
                        <td>
                          <img
                            className="img-fluid"
                            style={{ width: 100 }}
                            src={phone.hinhAnh}
                            alt={phone.tenSP}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.tangGiamSl(phone.maSP, true);
                            }}
                            className="btn btn-primary"
                          >
                            +
                          </button>
                          {phone.soLuong}
                          <button
                            onClick={() => {
                              this.props.tangGiamSl(phone.maSP, false);
                            }}
                            className="btn btn-primary"
                          >
                            -
                          </button>
                        </td>
                        <td>{phone.giaBan.toLocaleString()}</td>
                        <td>
                          {(phone.giaBan * phone.soLuong).toLocaleString()}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.xoaSP(phone.maSP);
                            }}
                            className="btn btn-danger"
                          >
                            Xóa SP
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // store tổng (rootReducer)
    gh: state.gioHangReducer.gioHang, //lấy đúng reducer (các nghiệp vụ từ store con tương ứng thông qua phương thức truy xuất)
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    tangGiamSl: (maSP, bool) => {
      const sp = {
        maSP: maSP,
        isCout: bool,
      };
      const action = {
        type: "TANG_GIAM_SP",
        sp: sp,
      };
      dispatch(action);
    },
    xoaSP: (maSP) => {
      const action = {
        type: "XOA_SP",
        maSP,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(ModalRedux);
