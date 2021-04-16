import React, { Component } from "react";
import Headers from "./Header";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Modal from "./Modal";
class BaitapcomponentDienThoai extends Component {
  state = {
    phoneDetails: {},
  };
  handleCommission = (phone) => {
    console.log(phone);
    this.setState({
      phoneDetails: phone,
    });
  };
  render() {
    return (
      <div>
        <Headers />
        <Carousel />
        <ProductList handleCommission={this.handleCommission} />
        <Footer />
        <Modal phone={this.state.phoneDetails} />
      </div>
    );
  }
}

export default BaitapcomponentDienThoai;
