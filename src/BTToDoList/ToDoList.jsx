import React, { Component } from "react";
import TaksDoing from "./TaksDoing";
import TaksToDo from "./TaksToDo";
import TaskCompleted from "./TaskCompleted";
import { ThemeProvider } from "styled-components";
import { T_CONTAINER, T_SELECT } from "./StyleComponent/StyleComponent";
import {
  PrimaryTheme,
  LightTheme,
  DarkTheme,
} from "./StyleComponent/ThemeStyle";

class Todolist extends Component {
  state = {
    theme: DarkTheme,
  };
  handleOnChange = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "LightTheme":
        this.setState({
          theme: LightTheme,
        });
        break;
      case "PrimaryTheme":
        this.setState({
          theme: PrimaryTheme,
        });
        break;
      default:
        this.setState({
          theme: DarkTheme,
        });
        break;
    }
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div style={{ fontSize: "14px" }} className="container">
          <T_CONTAINER className=" w-75 mx-auto  p-3">
            <T_SELECT
              className="form-select w-100 p-1"
              aria-label="Default select example"
              value={this.state.theme.name}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            >
              <option defaultValue={"DarkTheme"}>Default Theme</option>
              <option value={"LightTheme"}>Light Theme</option>
              <option value={"PrimaryTheme"}>Primary Theme</option>
            </T_SELECT>

            <h2 className="my-3">TO DO LIST</h2>
            <TaksDoing />
            <TaksToDo />
            <TaskCompleted />
          </T_CONTAINER>
        </div>
      </ThemeProvider>
    );
  }
}

export default Todolist;
