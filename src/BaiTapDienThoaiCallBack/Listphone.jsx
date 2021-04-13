import React, { Component } from "react";
import Phonedetails from "./Phonedetails";
import phoneData from "../Data/phoneData.json";
import Phone from "./Phone";
class Listphone extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       chiTietSP: {
  //         // maSP: 1,
  //         // tenSP: "VinSmart Live",
  //         // manHinh: "AMOLED, 6.2, Full HD+",
  //         // heDieuHanh: "Android 9.0 (Pie)",
  //         // cameraTruoc: "20 MP",
  //         // cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //         // ram: "4 GB",
  //         // rom: "64 GB",
  //         // giaBan: 5700000,
  //         // hinhAnh: "./img/vsphone.jpg",
  //       },
  //     };
  //   }
  renderPhoneDetail = () => {
    if (this.state) {
      return <Phonedetails chiTietSP={this.state.chiTietSP} />;
    }
    return "";
  };
  phoneData = phoneData;
  delegate = (phone) => {
    this.setState(
      {
        chiTietSP: phone,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="phone">
        <div className="row">
          {this.phoneData.map((phone, index) => {
            return <Phone delegate={this.delegate} item={phone} key={index} />;
          })}
        </div>
        <div className="row mt-4">{this.renderPhoneDetail()}</div>
      </div>
    );
  }
}

export default Listphone;
