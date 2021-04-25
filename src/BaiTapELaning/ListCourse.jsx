import React, { Component } from "react";
import { connect } from "react-redux";
import { actionGetCourse } from "../redux/reducer/Action/CouresAsyn";
import CouresItem from "./CouresItem";
class ListCourse extends Component {
  componentDidMount() {
    this.props.dispatch(actionGetCourse());
  }
  render() {
    return (
      <div className="row">
        {this.props.listCouse.map((coures, index) => {
          return <CouresItem coures={coures} key={index} />;
        })}
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    listCouse: state.CourseReducer.listCourse,
  };
};
export default connect(mapStateToProp)(ListCourse);
