import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, handleCommission } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4">
        <div className="card bg-light">
          <img
            className="card-img-top"
            src={item.scr}
            alt="Card image"
            style={{ width: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{item.itemName}</h4>
            <p className="card-text">
              iPhone X features a new all-screen design. Face ID, which makes
              your face your password
            </p>
            <a
              onClick={() => {
                handleCommission(item);
              }}
              data-toggle="modal"
              data-target="#modelId"
              href="#"
              className="btn btn-primary"
            >
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
