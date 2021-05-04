import React, { Component } from "react";
import { ADD_TAKS, UPDATE_TAKS } from "../redux/reducer/Action/Type";
import action from "../redux/reducer/Action";
import { connect } from "react-redux";
import { T_BUTTON, T_INPUT } from "./StyleComponent/StyleComponent";
class TaksDoing extends Component {
  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     taksName: newProps.taskEdit.taksName,
  //   });
  // sử dụng ở phiên bản 16.0
  // }
  //chạy trước render (hướng 1 xử lý trước render)
  shouldComponentUpdate(newProps, newState) {
    // console.log("newProps", newProps);
    // console.log("newState", newState);
    //sử dụng ở phiên bản 16.4
    if (newProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taksName: newProps.taskEdit.taksName,
      });
    }
    return true;
  }
  //chạy sau render (hướng 2 xử lý sau khi render)
  // componentDidUpdate(prevProps,prevState){
  //  if(prevProps.taskEdit.id !== this.props.taskEdit.id) {
  // this.setState({
  //   taksName: newProps.taskEdit.taksName,
  // });)
  // }
  //Cả 2 trường hợp trên phải có if để so sánh chứ nếu ta chỉ setState
  // không thì nó sẽ bị lập vô tận

  // constructor(props) {
  //   super(props);
  //   this.textInput = React.createRef();
  // }
  state = {
    taksName: "",
  };
  // textFocus = () => {
  //   console.log(this.textInput.current.value);
  //   console.log(this.textInput.current.name);
  // };

  render() {
    return (
      <>
        <p>TaskName</p>
        <div className="row">
          <div className="col-6">
            <T_INPUT
              className="w-100"
              type="text"
              name="taksName"
              // ref={this.textInput}
              value={this.state.taksName}
              onChange={(e) => {
                this.setState({
                  taksName: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-4">
            {this.props.disibleBtn ? (
              <T_BUTTON
                className="btn btn-sm"
                onClick={() => {
                  const taks = {
                    taksName: this.state.taksName,
                    id: Date.now(),
                    checkTask: false,
                  };
                  this.props.dispatch(action(ADD_TAKS, taks));
                }}
                // onClick={this.textFocus}
              >
                <i
                  style={{ display: "inline-block", marginRight: "5px" }}
                  className="fa fa-plus"
                ></i>
                Add Taks
              </T_BUTTON>
            ) : (
              <T_BUTTON className="btn btn-sm" disabled>
                <i
                  style={{ display: "inline-block", marginRight: "5px" }}
                  className="fa fa-plus"
                ></i>
                Add Taks
              </T_BUTTON>
            )}

            {this.props.disibleBtn ? (
              <T_BUTTON disabled className="ml-2 btn  btn-sm">
                <i
                  style={{ display: "inline-block", marginRight: "5px" }}
                  className="fa fa-upload"
                ></i>
                Update Taks
              </T_BUTTON>
            ) : (
              <T_BUTTON
                className="ml-2 btn  btn-sm"
                onClick={() => {
                  const payLoad = {
                    id: this.props.taskEdit.id,
                    taksName: this.state.taksName,
                  };
                  this.props.dispatch(action(UPDATE_TAKS, payLoad));
                }}
              >
                <i
                  style={{ display: "inline-block", marginRight: "5px" }}
                  className="fa fa-upload"
                ></i>
                Update Taks
              </T_BUTTON>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taskEdit: state.todolistReducer.taskEdit,
    configTheme: state.todolistReducer.configTheme,
    disibleBtn: state.todolistReducer.disibleBtn,
  };
};
export default connect(mapStateToProps)(TaksDoing);
