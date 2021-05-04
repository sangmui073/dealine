import React, { Component } from "react";

class BaiTapHook extends Component {
  state = {
    error: {
      user: "1",
      pass: "2",
    },
    value: {
      user: React.createRef(),
      pass: React.createRef(),
    },
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.state.value.user} />
        <br />
        <label>{this.state.error.user}</label>
        <br />

        <input type="text" ref={this.state.value.pass} />
        <br />

        <label>{this.state.error.pass}</label>
        <button
          onClick={(e) => {
            console.log(this.state.value.user.current.focus());
            let { value } = this.state;
            let error = { ...this.state.error };

            for (let key in value) {
              if (value[key].current.value === "") {
                error[key] = `${key} khong duoc de trong`;
              }
            }
            this.setState({
              ...this.state,
              error: error,
            });
          }}
          className="btn"
        >
          Click
        </button>
      </div>
    );
  }
}

export default BaiTapHook;
