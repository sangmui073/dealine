import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import CouresDetail from "./CouresDetail";
import ListCourse from "./ListCourse";

class BaitapElarning extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3>Danh Sách Khóa Học</h3>
        <Link className="btn btn-primary mb-4" to="/Coures">
          Tro ve danh sach khoa hoc
        </Link>
        <Switch>
          <Route path="/Coures/Details/:id" component={CouresDetail} />
          <Route path="/" component={ListCourse} />
        </Switch>
      </div>
    );
  }
}

export default BaitapElarning;
