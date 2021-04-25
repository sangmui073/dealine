import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { ActionSign } from "../redux/reducer/Action/UserAsyn";

class SignIn extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3 className="text-center">Đăng Nhập</h3>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={(value) => {
            this.props.dispatch(ActionSign(value));
            this.props.history.push("/Coures");
          }}
          render={(props) => {
            return (
              <Form className="w-50 mx-auto">
                <div className="form-group">
                  <label>Tài Khoản</label>
                  <Field
                    onChange={props.handleChange}
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                  />
                </div>
                <div className="form-group">
                  <label>Mật Khẩu</label>
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                  />
                </div>
                <button
                  onChange={props.handleChange}
                  className="btn btn-success"
                >
                  Đăng Nhập
                </button>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}

export default connect()(SignIn);
