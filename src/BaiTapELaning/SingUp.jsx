import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { ActionPostUser } from "../redux/reducer/Action/UserAsyn";
class SingUp extends Component {
  // handleSubmit = (e, value) => {
  //   e.preventDefault();
  //   console.log(value);
  // };

  render() {
    const scheme = yup.object().shape({
      taiKhoan: yup.string().required("tài khoản không được để trống"),
      matKhau: yup
        .string()
        .required("mật khẩu không được để trống")
        .min(5, "Không được ít hơn 5 ký tự"),
      hoTen: yup.string().required("phải nhập họ tên"),
      email: yup
        .string()
        .required("email không được để trống")
        .email("Phải đúng định dạng email"),
      soDT: yup
        .string()
        .required("số điện thoại không được để trống")
        .matches(/^[0-9]+$/, "số điện thoại phải đúng định dạng"),
      maNhom: yup.string().required("vui lòng chọn nhóm"),
    });
    return (
      <div className="container">
        <h3 className="display-4 text-center">Đăng Ký</h3>
        <div className="row justify-content-center">
          <div className="col-6">
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                maNhom: "GP01",
              }}
              onSubmit={(value) => {
                console.log(value);
                this.props.dispatch(ActionPostUser(value));
              }}
              validationSchema={scheme}
              render={(formilkProps) => (
                <Form>
                  <div className="form-group">
                    <label>Tài Khoản</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      onChange={formilkProps.handleChange}
                    />
                    <ErrorMessage
                      className="alert alert-danger"
                      name="taiKhoan"
                    >
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Mật Khẩu</label>
                    <Field
                      type="password"
                      className="form-control"
                      name="matKhau"
                      onChange={formilkProps.handleChange}
                    />
                    <ErrorMessage className="alert alert-danger" name="matKhau">
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Họ Tên</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="hoTen"
                      onChange={formilkProps.handleChange}
                    />
                    <ErrorMessage className="alert alert-danger" name="hoTen">
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={formilkProps.handleChange}
                    />
                    <ErrorMessage className="alert alert-danger" name="email">
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Số Điện Thoại</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="soDT"
                      onChange={formilkProps.handleChange}
                    />
                    <ErrorMessage className="alert alert-danger" name="soDT">
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Loại Người Dùng</label>
                    <Field as="select" className="form-control" name="maNhom">
                      <option>GP01</option>
                      <option>GP02</option>
                      <option>GP03</option>
                      <option></option>
                      <option></option>
                    </Field>
                    <ErrorMessage className="alert alert-danger" name="maNhom">
                      {(err) => {
                        return <p className="alert alert-danger">{err}</p>;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-group text-center">
                    {/* {this.state.isSucces ? (
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    ) : (
                      <button
                        disabled="true"
                        type="submit"
                        className="btn btn-success"
                      >
                        Submit
                      </button>
                    )} */}
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SingUp);
