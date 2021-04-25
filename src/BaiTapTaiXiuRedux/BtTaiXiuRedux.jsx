import React, { Component } from "react";
import BtnTaiorXiu from "./BtnTaiorXiu";
import KetQua from "./KetQua";
import "./styleGameTaiXiu.module .scss";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BtTaiXiuRedux extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <div className="row text-center">
            <BtnTaiorXiu choice={true} />
            <div className="col-4">
              <div className="d-flex justify-content-center">
                {this.props.mangXucXac.map((xc, index) => {
                  return <XucXac key={index} xc={xc} />;
                })}
              </div>
            </div>
            <BtnTaiorXiu choice={false} />
          </div>
        </div>
        <div className="container text-center display-4">
          <KetQua />
          <button
            onClick={() => {
              this.props.dispatch({
                type: "PLAY_GAME",
              });
            }}
            className="btn btn-success"
            style={{ fontSize: 30 }}
          >
            PLAY GAME
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.TaiXiuReducer.mangXucXac,
  };
};
export default connect(mapStateToProps)(BtTaiXiuRedux);
