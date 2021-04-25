import React, { Component } from "react";
import { Link } from "react-router-dom";

class CouresItem extends Component {
  render() {
    const { coures } = this.props;

    return (
      <div className="col-3 mb-3">
        <div className="card h-100">
          <img
            className="card-img-top img-fluid"
            style={{ width: 250, height: 200 }}
            src={coures.hinhAnh}
            alt={coures.biDanh}
          />
          <input type="hidden" />
          <div className="card-body">
            <h4 className="card-title">{coures.tenKhoaHoc}</h4>
            <p className="card-text">
              {coures.moTa.length > 150
                ? coures.moTa.substring(0, 150) + "..."
                : coures.moTa}
            </p>
            <Link
              to={`/Coures/Details/${coures.maKhoaHoc}`}
              className="btn btn-primary"
            >
              Chi Tiet Khoa Hoc
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CouresItem;
