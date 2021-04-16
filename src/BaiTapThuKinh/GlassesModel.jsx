import React, { Component } from "react";

class GlassesModel extends Component {
  render() {
    const { img, glasseName, price } = this.props.info;
    return (
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src="./img/glassesImage/model.jpg"
          alt="hinh model"
        />
        <img
          src={img}
          alt="kinh"
          style={{
            width: 170,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "16%",
          }}
        />

        <div className="card-body bg-white">
          <div>
            <span className="card-title badge-danger h3 px-2 rounded">
              ${price}
            </span>
            <p className="card-text mt-2">{glasseName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GlassesModel;
