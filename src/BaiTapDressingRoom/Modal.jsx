import React, { Component } from "react";
import classes from "./assets/css/style.module.css";
import { connect } from "react-redux";
class Modal extends Component {
  render() {
    const {
      topclothes,
      botclothes,
      shoes,
      background,
      handbags,
      necklaces,
      hairstyle,
    } = this.props.modal;
    console.log(topclothes);
    return (
      <div className={classes.contain}>
        <div
          className={classes.body}
          style={{
            backgroundImage: `url("./img/allbody/bodynew.png")`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.model}
          style={{
            backgroundImage: `url("./img/model/1000new.png")`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.hairstyle}
          style={{
            backgroundImage: `url(${hairstyle})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.necklace}
          style={{
            backgroundImage: `url(${necklaces})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.bikinitop}
          style={{
            backgroundImage: `url(${topclothes})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.bikinibottom}
          style={{
            backgroundImage: `url(${botclothes})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.handbag}
          style={{
            backgroundImage: `url(${handbags})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className={classes.feet}
          style={{ backgroundImage: `url(${shoes})`, backgroundSize: "cover" }}
        />
        <div
          className={classes.background}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modal: state.DressingRoomReducer.modal,
  };
};
export default connect(mapStateToProps)(Modal);
