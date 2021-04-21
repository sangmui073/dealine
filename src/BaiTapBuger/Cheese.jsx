import React, { Component } from "react";

class Cheese extends Component {
  renderCheese = () => {
    let cheeseCout = this.props.cheese;
    const cheese = [];
    for (let i = 0; i < cheeseCout; i++) {
      cheese.push(<div key={i} className="cheese"></div>);
    }
    return cheese;
  };
  render() {
    return <>{this.renderCheese()}</>;
  }
}

export default Cheese;
