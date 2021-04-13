import React, { PureComponent, Component } from "react";

export default class Phim extends PureComponent {
  constructor(props) {
    super(props);
    console.log("pureComponent");
    this.state = {
      helo: "123",
    };
  }
  render() {
    const { value, delegate } = this.props;

    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" alt={value.bidanh} />
          <div className="card-body">
            <h5 className="card-title ">{value.tenPhim}</h5>
            <p className="card-text">
              {value.moTa.length > 100
                ? value.moTa.substring(1, 100) + "..."
                : value.moTa}
            </p>
            <button
              onClick={() => {
                delegate(value);
              }}
              className="btn btn-primary"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
