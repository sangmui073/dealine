import React, { Component } from "react";
import GheInfo from "./GheInfo";
import classes from "./style.module.css";
import dataGhe from "./danhsachghe.json";
import HangGhe from "./HangGhe";
class BtBookKingTicket extends Component {
  render() {
    return (
      <div
        className={classes.booking}
        style={{
          position: "fixed",
          backgroundImage: `url('./img/endgame.jpg')`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          top: 50,
        }}
      >
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            backgroundSize: "cover",
            top: 50,
          }}
        ></div>
        <div className="container  mt-2 ">
          <div className="row">
            <div className="col-8">
              <h2 className="text-warning text-center">
                Đặt Vé Xem Phim CyberClearn.com
              </h2>
              <p className="text-light text-center">Màn Hình</p>
              <div className={classes.screen}></div>
              <div>
                {dataGhe.map((item, index) => {
                  return <HangGhe key={index} item={item} />;
                })}
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-light text-center">Danh Sách Ghế Bạn Chọn</h4>
              <p style={{ marginBottom: 0 }}>
                <span
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "inline-block",
                  }}
                  className={classes.gheDuocChon}
                >
                  {" "}
                </span>
                <span
                  style={{
                    color: "#fff",
                    display: "inline-block",
                    verticalAlign: "super",
                    marginLeft: "10px",
                  }}
                >
                  Ghế Đã Đặt
                </span>
              </p>
              <p style={{ marginBottom: 0 }}>
                <span
                  className={classes.gheDangChon}
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                </span>
                <span
                  style={{
                    color: "#fff",
                    display: "inline-block",
                    verticalAlign: "super",
                    marginLeft: "10px",
                  }}
                >
                  Ghế Đang Chọn
                </span>
              </p>
              <p style={{ marginBottom: 0 }}>
                <span
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "inline-block",
                    background: "#fff",
                    border: "3px solid #fff",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                </span>
                <span
                  style={{
                    color: "#fff",
                    display: "inline-block",
                    verticalAlign: "super",
                    marginLeft: "10px",
                  }}
                >
                  Ghế Chưa Đặt
                </span>
              </p>
              <GheInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BtBookKingTicket;
