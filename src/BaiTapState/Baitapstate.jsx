import React, { Component } from "react";

class Baitapstate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isName: "",
    };
  }

  checkLogin(isCheck) {
    if (isCheck) {
      this.setState(
        {
          isLogin: true,
          isName: "Tran Minh Phuc",
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      this.setState(
        {
          isLogin: false,
          isName: "",
        },
        () => {
          console.log(this.state);
        }
      );
    }
  }
  render() {
    let { isLogin, isName } = this.state;
    return (
      <div>
        {isLogin ? (
          <>
            <span>{isName}</span>
            <button
              onClick={() => {
                this.checkLogin(false);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              this.checkLogin(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    );
  }
}

export default Baitapstate;
