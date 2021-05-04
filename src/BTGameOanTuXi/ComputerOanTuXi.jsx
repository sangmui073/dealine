import React, { Component } from "react";
import { connect } from "react-redux";
class ComputerOanTuXi extends Component {
  render() {
    const { value } = this.props.computerChoice;
    const keyframe = `@keyframes RanDom${Date.now()} {
        0% {top: -50px;}
        25% {top: 100px;}
        50% {top: -50px;}
        75% {top : 100px}
        100% {top: 0}
      }`;
    const styleCss =
      value === "keo"
        ? {
            transform: "rotate(180deg)",
          }
        : {};
    return (
      <div
        className="speech-bubble"
        style={{ width: 100, height: 100, margin: "auto" }}
      >
        <style>{keyframe}</style>
        <button
          className="btn"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="img-fluid"
            src={this.props.computerChoice.hinhAnh}
            alt={this.props.computerChoice.value}
            style={{
              ...styleCss,
              animation: `RanDom${Date.now()} 1s ease-out`,
              position: "absolute",
              //   top: "30%",
              padding: "20px",
              top: "10px",
              left: "0",
            }}
          />
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computerChoice: state.oanTuTiReducer.computer,
  };
};
export default connect(mapStateToProps)(ComputerOanTuXi);
