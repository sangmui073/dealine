import React, { Component } from "react";

class GlassesItem extends Component {
  render() {
    const { item, handleCommission } = this.props;
    return (
      <div className="col-3 mb-5">
        <button
          onClick={() => {
            handleCommission(item);
          }}
          className="btn btn-outline-secondary"
        >
          <img
            src={item.img}
            alt="hinh"
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  }
}

export default GlassesItem;
