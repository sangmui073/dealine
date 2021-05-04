import React, { Component } from "react";
import { connect } from "react-redux";
import action from "../redux/reducer/Action";
import { DELETE_TAKS_COMPLETE } from "../redux/reducer/Action/Type";
import { T_BUTTON, T_DIV } from "./StyleComponent/StyleComponent";
class TaskCompleted extends Component {
  render() {
    return (
      <div className="my-4">
        <h5>TASK COMPLETED</h5>
        {this.props.taksList.map((item, index) => {
          if (item.checkTask) {
            return (
              <T_DIV
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
                className="p-2 mt-1"
              >
                <span>{item.taksName}</span>
                <div>
                  <T_BUTTON
                    className="ml-2 btn  btn-sm"
                    onClick={() => {
                      this.props.dispatch(action(DELETE_TAKS_COMPLETE, item));
                    }}
                  >
                    <i className="fa fa-trash-alt"></i>
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
    taksList: state.todolistReducer.taksList,
  };
};
export default connect(mapStateToProps)(TaskCompleted);
