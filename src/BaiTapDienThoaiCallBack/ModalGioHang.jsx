import React, { Component } from "react";

class ModalGioHang extends Component {
  render() {
    const tongTien = this.props.mangSp
      .reduce((number, item) => {
        return (number += item.soLuong * item.giaBan);
      }, 0)
      .toLocaleString();
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
          className="modal-dialog"
          style={{ maxWidth: 1200 }}
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
              <div className="container-fluid">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: 150 }}>
                        Mã Sản Phẩm
                      </th>
                      <th className="text-center" style={{ width: "150px" }}>
                        Hình Ảnh
                      </th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Số Lượng</th>
                      <th className="text-center">Đơn Giá</th>
                      <th className="text-center">Thành Tiền</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.mangSp.map((item, index) => {
                      const thanhTien = item.giaBan * item.soLuong;
                      return (
                        <tr key={index}>
                          <td className="text-center">{item.maSP}</td>
                          <td className="text-center">
                            <img className="img-fluid" src={item.hinhAnh} />
                          </td>
                          <td className="text-center">{item.tenSP}</td>
                          <td className="text-center">
                            <button
                              onClick={() => {
                                this.props.handleIncreaseOrDecrease(item, true);
                              }}
                              className="btn btn-primary"
                            >
                              +
                            </button>
                            {item.soLuong}
                            <button
                              onClick={() => {
                                this.props.handleIncreaseOrDecrease(
                                  item,
                                  false
                                );
                              }}
                              className="btn btn-primary"
                            >
                              -
                            </button>
                          </td>
                          <td className="text-center">
                            {item.giaBan.toLocaleString()}
                          </td>
                          <td className="text-center">
                            {thanhTien.toLocaleString()}
                          </td>
                          <td className="text-center">
                            <button
                              onClick={() => {
                                this.props.handleDelete(item);
                              }}
                              className="btn btn-danger"
                            >
                              Xoa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p
                  className="text-right"
                  style={{ borderTop: "1px solid black" }}
                >
                  Tổng Tiền: {tongTien}đ
                </p>
              </div>
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

export default ModalGioHang;
