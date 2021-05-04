import React, { Component } from "react";
import classes from "./hangGhe.module.css";
import action from "../redux/reducer/Action";
import { connect } from "react-redux";
import { DAT_GHE_TICKET } from "../redux/reducer/Action/Type";
class HangGhe extends Component {
  renderHangGhe = () => {
    const { hang, danhsachGhe } = this.props.item;
    if (hang === "") {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
          className={`${classes.rowNumber} text-light`}
        >
          {hang}
          {danhsachGhe.map((ghe, index) => {
            return (
              <span
                style={{ color: "#fff", width: "35px", marginRight: "10px" }}
                key={index}
              >
                {ghe.soGhe}
              </span>
            );
          })}
        </div>
      );
    }
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="text-light"
      >
        {hang}
        {danhsachGhe.map((ghe, index) => {
          let cssGheDaDat = {};
          let disabled = false;
          let cursor = "";
          if (ghe.daDat) {
            cssGheDaDat = classes.gheDuocChon;
            disabled = true;
            cursor = "not-allowed";
          }
          const indexGhe = this.props.gheDangDat.findIndex((gheDangDat) => {
            return gheDangDat.maGhe === ghe.maGhe;
          });
          if (indexGhe !== -1) {
            cssGheDaDat = classes.gheDangChon;
          }
          return (
            <button
              key={index}
              disabled={disabled}
              className={`${classes.ghe} ${cssGheDaDat} `}
              style={{ cursor: `${cursor}` }}
              onClick={() => {
                this.props.dispatch(action(DAT_GHE_TICKET, ghe));
              }}
            >
              {ghe.soGhe}
            </button>
          );
        })}
      </div>
    );
  };
  render() {
    return this.renderHangGhe();
  }
}
const mapStateToProps = (state) => {
  return {
    gheDangDat: state.bookingReducer.gheDangDat,
  };
};
export default connect(mapStateToProps)(HangGhe);
