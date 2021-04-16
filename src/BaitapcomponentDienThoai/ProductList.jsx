import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  productItem = [
    {
      id: 1,
      itemName: "Note 7",
      scr: "./img/sp_note7.png",
      price: 30000,
    },
    {
      id: 2,
      itemName: "IphoneX",
      scr: "./img/sp_iphoneX.png",
      price: 50000,
    },
    {
      id: 3,
      itemName: "Ihpone12",
      scr: "./img/sp_blackberry.png",
      price: 40000,
    },
  ];
  renderItem() {
    return this.productItem.map((item, index) => {
      return (
        <ProductItem
          handleCommission={this.props.handleCommission}
          key={index}
          item={item}
        />
      );
    });
  }
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="container">
          <div className="row">{this.renderItem()}</div>
        </div>
      </section>
    );
  }
}
