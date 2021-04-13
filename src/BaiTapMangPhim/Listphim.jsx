import React, { Component } from "react";

import Phim from "./Phim";
export default class Listphim extends Component {
  //   hanlderOnclick(phim) {
  //     console.log(this.state);
  //   }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-4">Bài Tập Render Mảng Phim</h3>
        <div className="row">
          {this.props.mangPhim.map((phim, index) => {
            return <Phim value={phim} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
