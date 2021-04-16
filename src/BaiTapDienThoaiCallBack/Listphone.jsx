import React, { Component } from "react";
import Phonedetails from "./Phonedetails";
import phoneData from "../Data/phoneData.json";
import Phone from "./Phone";
import ModalGioHang from "./ModalGioHang";
class Listphone extends Component {
  state = {
    mangSanPham: [],
    chiTietSP: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    tongSl: 0,
  };
  renderPhoneDetail = () => {
    return <Phonedetails chiTietSP={this.state.chiTietSP} />;
  };
  phoneData = phoneData;
  delegate = (phone) => {
    this.setState(
      {
        chiTietSP: phone,
      },
      () => {}
    );
  };
  modalGioHang = (sanPham) => {
    const newSanPham = { ...sanPham, soLuong: 1 };
    const id = this.state.mangSanPham.findIndex(
      (sp) => sp.maSP == newSanPham.maSP
    );
    if (id !== -1) {
      this.state.mangSanPham[id].soLuong += 1;
    } else {
      this.state.mangSanPham.push(newSanPham);
    }
    const mangSPUpdate = [...this.state.mangSanPham];

    const newTongSl = mangSPUpdate.reduce((num, sp) => {
      return (num += sp.soLuong);
    }, 0);
    this.setState({
      ...this.state,
      mangSanPham: mangSPUpdate,
      tongSl: newTongSl,
    });
  };
  handleDelete = (sanPham) => {
    const newMangSP = [
      ...this.state.mangSanPham.filter((item) => {
        return item.maSP != sanPham.maSP;
      }),
    ];
    const newTongSl = newMangSP.reduce((num, item) => {
      return (num += item.soLuong);
    }, 0);
    this.setState({
      ...this.state,
      mangSanPham: newMangSP,
      tongSl: newTongSl,
    });
  };
  handleIncreaseOrDecrease = (sanpham, bool) => {
    const newMangSp = [...this.state.mangSanPham];
    let index = newMangSp.findIndex((item) => {
      return item.maSP == sanpham.maSP;
    });

    if (bool) {
      newMangSp[index].soLuong += 1;
    } else {
      if (newMangSp[index].soLuong > 0) {
        newMangSp[index].soLuong -= 1;
      }
    }

    const newTongSl = newMangSp.reduce((num, item) => {
      return (num += item.soLuong);
    }, 0);
    this.setState({
      ...this.state,
      mangSanPham: newMangSp,
      tongSl: newTongSl,
    });
  };
  render() {
    return (
      <div className="phone">
        <h5 className="text-right ">
          <button
            data-toggle="modal"
            data-target="#modelId"
            className="text-danger btn"
          >
            <i className="fa fa-cart-plus"></i>
            <span>({this.state.tongSl})</span>
            Giỏ Hàng
          </button>
        </h5>
        <div className="row">
          {this.phoneData.map((phone, index) => {
            return (
              <Phone
                delegate={this.delegate}
                modalGioHang={this.modalGioHang}
                item={phone}
                key={index}
              />
            );
          })}
        </div>
        <div className="row mt-4">{this.renderPhoneDetail()}</div>
        <ModalGioHang
          handleIncreaseOrDecrease={this.handleIncreaseOrDecrease}
          handleDelete={this.handleDelete}
          mangSp={this.state.mangSanPham}
        />
      </div>
    );
  }
}

export default Listphone;
