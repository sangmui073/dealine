import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { itemName, scr, price } = this.props.phone;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex="{-1}"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi Tiết Điện Thoại</h5>
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
                    <th style={{ width: 100 }}>Hình Ảnh</th>
                    <th>Loại</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="img-fluid" src={scr} />
                    </td>
                    <td>{itemName}</td>
                    <td>{price}</td>
                  </tr>
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

export default Modal;
