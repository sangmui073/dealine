import React, { Component } from "react";
import { connect } from "react-redux";
const catePanel = [
  { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
  { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
  { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
  { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
  { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
  { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
  { tabName: "tabBackground", showName: "Nền", type: "background" },
];
class CatePanelBtn extends Component {
  render() {
    const { cateChoice } = this.props;
    return (
      <div className="row px-4 mb-2">
        {catePanel.map((item, index) => {
          return (
            <button
              key={index}
              className={
                cateChoice === item.type
                  ? "ml-2 btn btn-primary"
                  : "ml-2 btn btn-link"
              }
              onClick={() => {
                this.props.dispatch({
                  type: "CHOICE_PANEL",
                  payload: item,
                });
              }}
            >
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cateChoice: state.DressingRoomReducer.cateChoice,
  };
};
export default connect(mapStateToProps)(CatePanelBtn);
