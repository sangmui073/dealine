import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import classes from "./assets/css/style.module.css";
import CatePanelBtn from "./CatePanelBtn";
import CateItem from "./CateItem";
class DressingRoom extends Component {
  render() {
    return (
      <div className={`${classes.well}container-fluid `}>
        <Header />
        <hr className={classes.hr} />
        <div className="row">
          <div className="col-7">
            <CatePanelBtn />
            <div className="row">
              <CateItem />
            </div>
          </div>
          <div className="col-5">
            <Modal />
          </div>
        </div>
        <hr className={classes.hr} />
        <Footer />
      </div>
    );
  }
}

export default DressingRoom;
