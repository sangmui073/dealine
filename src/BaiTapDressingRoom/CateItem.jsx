import React, { Component } from "react";

import { connect } from "react-redux";
class CateItem extends Component {
  render() {
    return this.props.catelogeList.map((item, index) => {
      return (
        <div className="col-3">
          <div key={index} className="card mb-4 p-2">
            <img className="img-fluid" src={item.imgSrc_jpg} />
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "TRY_ON",
                  payload: item,
                });
              }}
              className="mt-2 btn btn-success"
            >
              Thử Đồ
            </button>
          </div>
        </div>
      );
    });
  }
}
const mapStateToProps = (state) => {
  return {
    catelogeList: state.DressingRoomReducer.catelogeList,
  };
};
export default connect(mapStateToProps)(CateItem);
