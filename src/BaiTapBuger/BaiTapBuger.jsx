import React, { Component } from "react";
import { connect } from "react-redux";
import "../BaiTapBuger/BaiTapBuger.css";
import Beef from "./Beef";
import Cheese from "./Cheese";
import Menu from "./Menu";
import Salad from "./Salad";
class BaiTapBuger extends Component {
  renderMenu = () => {
    const menu = this.props.buger.menu;
    const menuList = [];
    for (let key in menu) {
      menuList.push(<Menu key={key} menuName={key} price={menu[key]} />);
    }
    return menuList;
  };
  render() {
    const { total, buger } = this.props.buger;

    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài tập burger cybersoft</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            <Salad salad={buger.salad} />
            <Cheese cheese={buger.cheese} />
            <Beef beef={buger.beef} />
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="1"></td>
                  <td>Tổng cộng</td>
                  <td>{total}$</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    buger: state.BugerReducer,
  };
};
export default connect(mapStateToProps)(BaiTapBuger);
