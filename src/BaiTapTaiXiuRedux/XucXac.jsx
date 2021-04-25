import React, { Component } from "react";

class XucXac extends Component {
  render() {
    return (
      <>
        <img src={this.props.xc.hinhAnh} width={50} height={50} alt="hinh" />
      </>
    );
  }
}

export default XucXac;
