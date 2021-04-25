import React, { Component } from "react";
import { connect } from "react-redux";
class BtnTaiorXiu extends Component {
  render() {
    const { choice } = this.props;
    return (
      <div className="col-4">
        <button
          className={`${
            choice ? "bg-danger" : "bg-dark"
          } display-4 p-5 text-light`}
          onClick={() => {
            this.props.dispatch({
              type: "CHOICE",
              payload: choice,
            });
          }}
        >
          {this.props.choice ? "Tài" : "Xĩu"}{" "}
        </button>
      </div>
    );
  }
}

export default connect()(BtnTaiorXiu);
