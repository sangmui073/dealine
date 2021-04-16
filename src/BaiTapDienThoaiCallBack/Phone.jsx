import React, { PureComponent } from "react";

class Phone extends PureComponent {
  render() {
    const { delegate, modalGioHang } = this.props;
    const { tenSP, hinhAnh } = this.props.item;
    return (
      <div className="col-4">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src={hinhAnh} alt={tenSP} />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <button
              onClick={() => {
                delegate(this.props.item);
              }}
              className="text-white btn-success"
            >
              Xem Chi Tiet
            </button>
            <button
              onClick={() => {
                modalGioHang(this.props.item);
              }}
              className="text-white btn-primary ml-5"
            >
              Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
