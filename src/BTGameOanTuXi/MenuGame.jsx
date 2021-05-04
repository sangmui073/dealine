import React, { Component } from "react";
import { connect } from "react-redux";
import action from ".././redux/reducer/Action";
import { KEO_BUA_BAO } from "../redux/reducer/Action/Type";
class MenuGame extends Component {
  render() {
    const { listMenuGame, playerChoie } = this.props;
    return (
      <div style={{ display: "flex" }}>
        {listMenuGame.map((item, index) => {
          let cssItemChoice =
            item.value === playerChoie.value ? "btn-outline-warning" : "";
          let styleItem = item.value === playerChoie.value ? "#ffc107" : "#fff";
          return (
            <button
              style={{ width: 80, background: styleItem }}
              key={index}
              className={`btn ${cssItemChoice} mx-2 `}
              onClick={() => {
                this.props.dispatch(action(KEO_BUA_BAO, item));
              }}
            >
              <img className="img-fluid" src={item.hinhAnh} alt={item.value} />
            </button>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listMenuGame: state.oanTuTiReducer.menuGamePlay,
    playerChoie: state.oanTuTiReducer.player,
  };
};
export default connect(mapStateToProps)(MenuGame);
