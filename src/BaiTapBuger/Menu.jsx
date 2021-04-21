import React, { Component } from "react";
import { connect } from "react-redux";
class Menu extends Component {
  render() {
    const { menuName, price } = this.props;

    return (
      <tr>
        <td>{menuName}</td>
        <td>
          <button
            onClick={() => {
              this.props.themMonAn(menuName, 0);
            }}
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.themMonAn(menuName, -1);
            }}
            className="btn btn-danger"
          >
            -
          </button>
        </td>
        <td>{price}$</td>
      </tr>
    );
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    themMonAn: (tenMon, tangGiam) => {
      const action = {
        type: "TANG_GIAM_MON",
        tenMon,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDisPatchToProps)(Menu);
