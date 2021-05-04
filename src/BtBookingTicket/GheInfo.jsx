import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../redux/reducer/Action/Type";
import action from "../redux/reducer/Action";
class GheInfo extends Component {
  render() {
    const { gheDangDat } = this.props;
    return (
      <table className="table table-bordered table-white">
        <thead className=" text-light">
          <tr>
            <th style={{ padding: 0 }} scope="col">
              Số Ghế
            </th>
            <th style={{ padding: 0 }} scope="col">
              Giá
            </th>
            <th style={{ padding: 0 }} scope="col">
              Hủy
            </th>
          </tr>
        </thead>
        <tbody>
          {gheDangDat.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ padding: 0 }} className="text-warning">
                  {item.maGhe}
                </td>
                <td style={{ padding: 0 }} className="text-warning">
                  {item.gia}
                </td>
                <td style={{ padding: 0, textAlign: "center" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.dispatch(action(HUY_GHE, item));
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ padding: 0 }} className="text-light">
              Tổng Tiền
            </td>
            <td
              style={{ padding: 0 }}
              className="text-center text-warning"
              colSpan={2}
            >
              {gheDangDat
                .reduce((num, item) => {
                  return (num += item.gia);
                }, 0)
                .toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gheDangDat: state.bookingReducer.gheDangDat,
  };
};
export default connect(mapStateToProps)(GheInfo);
