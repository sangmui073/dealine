import React, { Component } from "react";
import ComputerOanTuXi from "./ComputerOanTuXi";
import MenuGame from "./MenuGame";
import PlayerOanTuXi from "./PlayerOanTuXi";
import ResultOanTuXi from "./ResultOanTuXi";
import "./style.css";
class GameOanTuXi extends Component {
  render() {
    return (
      <div
        className="gameOanTuTi"
        style={{
          backgroundImage: `url("./img/GameOanTuXi/BG-EndGame.jpg")`,
          backgroundSize: "100%",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 50,
          left: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",

            position: "fixed",
            width: "100%",
            height: "100%",
            top: 50,
            left: 0,
          }}
        ></div>
        <div className="container py-5">
          <div className="row">
            <div className="col-3">
              <PlayerOanTuXi />
              <div className="w-50 mx-auto mt-4">
                <img
                  className="img-fluid"
                  src="./img/GameOanTuXi/ironMan.png"
                  alt="iron"
                />
              </div>
              <MenuGame />
            </div>
            <div className="col-6 text-white text-center">
              <ResultOanTuXi />
            </div>
            <div className="col-3">
              <ComputerOanTuXi />
              <div className="w-50 mx-auto mt-4">
                <img
                  className="img-fluid"
                  src="./img/GameOanTuXi/thanos.png"
                  alt="thanos"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOanTuXi;
