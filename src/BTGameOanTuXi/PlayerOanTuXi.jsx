import React, { Component } from "react";
import { connect } from "react-redux";
class PlayerOanTuXi extends Component {
  render() {
    const { playerChoice } = this.props;
    return (
      <div
        className="speech-bubble d-flex"
        style={{ width: 100, height: 100, margin: "auto" }}
      >
        <button className="btn p-3">
          <img
            className="img-fluid"
            src={playerChoice.hinhAnh}
            alt={playerChoice.value}
          />
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    playerChoice: state.oanTuTiReducer.player,
  };
};
export default connect(mapStateToProps)(PlayerOanTuXi);
