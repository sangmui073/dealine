import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../Data/phoneData.json";
import ModalRedux from "./ModalRedux";

class BaiTapGioHangRedux extends Component {
  render() {
    const phoneData = data;
    return (
      <div>
        <h3 className="text-center my-5">Bài tập giỏ hàng reducer</h3>

        <div className="container">
          <p className="text-right text-danger">
            <i className="fa fa-shopping-cart" />({this.props.tongSl})Giỏ Hàng
            Của Bạn
          </p>
          <div className="row">
            {data.map((phone, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={phone.hinhAnh}
                      alt={phone.tenSP}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{phone.tenSP}</h4>
                      <button
                        data-toggle="modal"
                        data-target="#modelId"
                        className="btn btn-outline-primary"
                      >
                        Chi Tiết Sản Phẩm
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          this.props.themGioHang(phone);
                        }}
                      >
                        Mua Sản Phẩm
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ModalRedux />
      </div>
    );
  }
}
//Xây dựng hàm tạo ra props là sự kiện  sau đó đưa dữ liệu lên store
const mapDispathToProps = (dispatch) => {
  //Dispatch là ta tạo ra 1 sự kiện(function) biến nó thành 1 props và đưa lên store
  return {
    themGioHang: (sanPham) => {
      // param đầu vào là 1 sản phẩm hay gì đó để nó biết xử lý giỏ hàng nào
      const spGioHang = {
        //Lưu ý các key của  object này nên đặt tên trùng với object ở store nghiệp vụ vỏ hàng
        //vì để tý ở modal khi render sẽ trùng tên vs key này (nếu không trùng ta phải qua modal sửa lại)
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        giaBan: sanPham.giaBan,
      };

      const action = {
        //Đây là thứ ta gởi trong dispatch
        type: "THEM_GIO_HANG", //type để xác định bên swtich case của store con
        spGioHang, //giống post hay put delete thì ta phải gởi dữ liệu lên để nó biết mà xử lý nội dung nào
      };

      //Dùng hàm dispatch để đưa dữ liệu lên store reduccer
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    tongSl: state.gioHangReducer.tongSl,
  };
};
export default connect(mapStateToProps, mapDispathToProps)(BaiTapGioHangRedux);
