import React, { Component } from "react";
import { connect } from "react-redux";
import action from ".././redux/reducer/Action";
import {
  PLAY_KEO_BUA_BAO,
  RESULT_KEO_BUA_BAO,
} from "../redux/reducer/Action/Type";
class ResultOanTuXi extends Component {
  render() {
    const { text, numberWin, numberPlay } = this.props.result;
    return (
      <>
        <p style={{ fontSize: 30, color: "orange" }}>{text}</p>
        <p style={{ fontSize: 30, color: "green" }}>
          Số bàn thắng :<span style={{ color: "orange" }}>{numberWin}</span>
        </p>
        <p style={{ fontSize: 30, color: "green" }}>
          Số bàn chơi : <span style={{ color: "orange" }}>{numberPlay}</span>
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            let cout = 0;
            const floopRanDom = setInterval(() => {
              const randomNumber = Math.floor(Math.random() * 3);
              this.props.dispatch(action(PLAY_KEO_BUA_BAO, randomNumber));
              cout++;
              if (cout > 10) {
                clearInterval(floopRanDom);
                this.props.dispatch(action(RESULT_KEO_BUA_BAO));
              }
            }, 100);
          }}
        >
          Play Game
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.oanTuTiReducer.result,
    menuGamePlay: state.oanTuTiReducer.menuGamePlay,
  };
};
export default connect(mapStateToProps)(ResultOanTuXi);
