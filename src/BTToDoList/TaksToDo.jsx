import React, { Component } from "react";
import { connect } from "react-redux";
import action from "../redux/reducer/Action";
import {
  EDIT_TAKS,
  DELETE_TAKS_TODO,
  CHECK_TAKS,
} from "../redux/reducer/Action/Type";
import { T_BUTTON, T_DIV } from "./StyleComponent/StyleComponent";
class TaksToDo extends Component {
  render() {
    return (
      <div className="my-4">
        <h5>TASK TO DO</h5>
        {this.props.tastodo.map((item, index) => {
          if (!item.checkTask) {
            return (
              <T_DIV
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
                className="mt-1 p-2"
              >
                <span style={this.state}>{item.taksName}</span>
                <div>
                  <T_BUTTON
                    className="ml-2 btn btn-sm"
                    onClick={() => {
                      this.props.dispatch(action(DELETE_TAKS_TODO, item));
                    }}
                  >
                    <i className="fa fa-trash-alt"></i>
                  </T_BUTTON>
                  <T_BUTTON
                    className="ml-2 btn btn-sm"
                    onClick={() => {
                      this.props.dispatch(action(EDIT_TAKS, item));
                    }}
                  >
                    <i className="fa fa-edit"></i>
                  </T_BUTTON>
                  <T_BUTTON
                    className="ml-2 btn  btn-sm"
                    onClick={() => {
                      this.props.dispatch(action(CHECK_TAKS, item));
                    }}
                  >
                    <i className="fa fa-check"></i>
                  </T_BUTTON>
                </div>
              </T_DIV>
            );
          }
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tastodo: state.todolistReducer.taksList,
  };
};
export default connect(mapStateToProps)(TaksToDo);
