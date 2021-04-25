import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HeaderBaiTap extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Coures">
                Khoa Hoc <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Các Bài Tập
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/bugerRedux">
                  BugerRedux
                </Link>
                <Link className="dropdown-item" to="/btGioHangRedux">
                  BTGioHangRedux
                </Link>
                <Link className="dropdown-item" to="/btPhoneCallBack">
                  BTPhoneCB
                </Link>
                <Link className="dropdown-item" to="/btComponentDienThoai">
                  BTDienThoaiCom
                </Link>
                <Link className="dropdown-item" to="/baiTapState">
                  BTState
                </Link>
                <Link className="dropdown-item" to="/btGlass">
                  BTGlass
                </Link>
                <Link className="dropdown-item" to="/baiTapDoiMauXe">
                  BTDoiMauXe
                </Link>
                <Link className="dropdown-item" to="/baiTapQuanLySVRedux">
                  BTQuanLYSV
                </Link>
                <Link className="dropdown-item" to="/baitapTXredux">
                  BTTX redux
                </Link>
              </div>
            </li>
          </ul>
          {this.props.userLogin.user ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/userInfo">
                  {this.props.userLogin.user.taiKhoan}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>{" "}
              <li className="nav-item active">
                <Link
                  onClick={() => {
                    localStorage.removeItem("user");
                    this.props.dispatch({
                      type: "LOG_OUT",
                      payload: null,
                    });
                  }}
                  className="nav-link"
                  to="/"
                >
                  Log out
                  <span className="sr-only">(current)</span>
                </Link>
              </li>{" "}
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Singup">
                  Đăng Ký <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/SignIn">
                  Đăng Nhập <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    userLogin: state.UserReducer,
  };
};
export default connect(mapStateToProp)(HeaderBaiTap);
