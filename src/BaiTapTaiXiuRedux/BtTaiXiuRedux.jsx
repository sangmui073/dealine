import React, { Component } from "react";
import BtnTaiorXiu from "./BtnTaiorXiu";
import KetQua from "./KetQua";
import "./styleGameTaiXiu.module .scss";
import XucXac from "./XucXac";
import { connect } from "react-redux";
const listXucXac = [
  { hinhAnh: "./img/gameXucXac/1.png", value: 1 },
  { hinhAnh: "./img/gameXucXac/2.png", value: 2 },
  { hinhAnh: "./img/gameXucXac/3.png", value: 3 },
  { hinhAnh: "./img/gameXucXac/4.png", value: 4 },
  { hinhAnh: "./img/gameXucXac/5.png", value: 5 },
  { hinhAnh: "./img/gameXucXac/6.png", value: 6 },
];
const randomXc = () => {
  return Math.floor(Math.random() * 6);
};
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
          top: 50,
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
              let cout = 0;
              const lacXucXac = setInterval(() => {
                const newMangXucXac = [];
                for (let i = 0; i < 3; i++) {
                  newMangXucXac.push(listXucXac[randomXc()]);
                }
                this.props.dispatch({
                  type: "LAC_XUC_XAC",
                  payload: newMangXucXac,
                });
                cout++;
                if (cout > 10) {
                  clearInterval(lacXucXac);
                }
              }, 100);
              setTimeout(() => {
                this.props.dispatch({
                  type: "TINH_DIEM",
                });
              }, 2000);
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
