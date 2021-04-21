import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    error: {
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    isValid: false,
  };
  checkValid = () => {
    const { error, value } = this.state;
    let valid = true;
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
      }
    }
    if (valid) {
      for (let key in value) {
        if (value[key] === "") {
          valid = false;
        }
      }
    }
    this.setState({
      ...this.state,
      isValid: valid,
    });
  };
  handleOnChange = (e) => {
    let { name, value } = e.target;
    const newValue = { ...this.state.value };
    newValue[name] = value;
    const newError = { ...this.state.error };
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regNumber = /^[0-9]+$/;
    if (value === "") {
      newError[name] = `${name} not empty `;
    } else if (!regEmail.test(value.trim()) && name === "email") {
      newError[name] = `${name} isvalid`;
    } else if (!regNumber.test(value.trim()) && name === "soDT") {
      newError[name] = `${name} is number`;
    } else {
      newError[name] = "";
    }

    this.setState(
      {
        value: newValue,
        error: newError,
      },
      () => {
        this.checkValid(); // chú ý phần này
        //vì setState là hàm bất đồng bộ nên ta phải validate đúng cái state ngay đây
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="maSV">Mã SV</label>
            <input
              type="email"
              className="form-control"
              id="maSV"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.value.maSV}
              name="maSV"
            />
            <small style={{ height: 25 }} className="form-text text-danger">
              {this.state.error.maSV}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="hoTen">Họ Tên</label>
            <input
              type="text"
              className="form-control"
              id="hoTen"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.value.hoTen}
              name="hoTen"
            />
            <small style={{ height: 25 }} className="form-text text-danger">
              {this.state.error.hoTen}
            </small>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="soDT">Số Điện Thoại</label>
            <input
              type="text"
              className="form-control"
              id="soDT"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.value.soDT}
              name="soDT"
            />
            <small style={{ height: 25 }} className="form-text text-danger">
              {this.state.error.soDT}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.value.email}
              name="email"
            />
            <small style={{ height: 25 }} className="form-text text-danger">
              {this.state.error.email}
            </small>
          </div>
          <button
            disabled={this.state.isValid ? false : true}
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Thêm Sinh Viên
          </button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FormSinhVien);
