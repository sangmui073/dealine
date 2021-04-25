import React, { Component } from "react";
import { connect } from "react-redux";
import { actionGetCourseById } from "../redux/reducer/Action/CouresAsyn";
class CouresDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.dispatch(actionGetCourseById(match.params.id));
  }
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, biDanh } = this.props.Course;
    return (
      <div className="card ">
        <div className="row">
          <div className="col-4">
            <img
              className="card-img-top img-fluid"
              src={hinhAnh}
              alt={biDanh}
            />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h4 className="card-title">{tenKhoaHoc}</h4>
              <p className="card-text">{moTa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    Course: state.CourseReducer.Course,
  };
};
export default connect(mapStateToProp)(CouresDetail);
