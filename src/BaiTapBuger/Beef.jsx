import React, { Component } from "react";

class Beef extends Component {
  renderBeef = () => {
    let beefCout = this.props.beef;
    const beef = [];
    for (let i = 0; i < beefCout; i++) {
      beef.push(<div key={i} className="beef"></div>);
    }
    return beef;
  };
  render() {
    return <>{this.renderBeef()}</>;
  }
}

export default Beef;
