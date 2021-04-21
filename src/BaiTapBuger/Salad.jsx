import React, { Component } from "react";

class Salad extends Component {
  renderSaldad = () => {
    let saladCout = this.props.salad;
    const salads = [];
    for (let i = 0; i < saladCout; i++) {
      salads.push(<div key={i} className="salad"></div>);
    }
    return salads;
  };
  render() {
    return <>{this.renderSaldad()}</>;
  }
}

export default Salad;
