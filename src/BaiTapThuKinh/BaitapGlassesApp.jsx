import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import GlassesModel from "./GlassesModel";

class BaitapGlassesApp extends Component {
  state = {
    glassesInfo: {
      id: 9,
      img: "./img/glassesImage/v9.png",
      glasseName: "GUCCI G8850U",
      price: "30",
    },
  };
  glassesList = [
    {
      id: 1,
      img: "./img/glassesImage/v1.png",
      glasseName: "GUCCI G8850U",
      price: "30",
    },
    {
      id: 2,
      img: "./img/glassesImage/v2.png",
      glasseName: "GUCCI G8759H",
      price: "43",
    },
    {
      id: 3,
      img: "./img/glassesImage/v3.png",
      glasseName: "DIOR D6700HQ",
      price: "90",
    },
    {
      id: 4,
      img: "./img/glassesImage/v4.png",
      glasseName: "DIOR D6005U",
      price: "34",
    },
    {
      id: 5,
      img: "./img/glassesImage/v5.png",
      glasseName: "PRADA P8750",
      price: "25",
    },
    {
      id: 6,
      img: "./img/glassesImage/v6.png",
      glasseName: "PRADA P9700",
      price: "65",
    },
    {
      id: 7,
      img: "./img/glassesImage/v7.png",
      glasseName: "FENDI F8750",
      price: "30",
    },
    {
      id: 8,
      img: "./img/glassesImage/v8.png",
      glasseName: "FENDI F8500",
      price: "40",
    },
    {
      id: 9,
      img: "./img/glassesImage/v9.png",
      glasseName: "FENDI F4300",
      price: "50",
    },
  ];
  handleCommission = (item) => {
    this.setState({
      glassesInfo: item,
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#343a40", height: "100vh" }}>
        <h1 className="text-white text-center py-3 mb-4">Glasses App</h1>
        <div className="container">
          <div className="row ">
            <div className="col-3">
              <GlassesModel info={this.state.glassesInfo} />
            </div>
            <div className="ml-5 col-7">
              <div className="row d-flex justify-content-around flex-wrap">
                {this.glassesList.map((item, index) => {
                  return (
                    <GlassesItem
                      key={index}
                      handleCommission={this.handleCommission}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaitapGlassesApp;
