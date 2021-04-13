import React, { Component } from "react";

class Doimauxe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "./img/imgSilverCar.jpg",
    };
  }
  changeColor(color) {
    this.setState({
      src: `./img/img${color}Car.jpg`,
    });
  }
  render() {
    // const listColor = ;
    const [black, red, silver] = ["Black", "Red", "Silver"];
    return (
      <div className="container mt-4">
        <h3 className="text-center">Bài Tập Đổi Màu Xe</h3>
        <div className="row p-5">
          <div className="col-6">
            <p>Choice color cars</p>
            <img className="img-fluid" src={this.state.src} alt="123" />
          </div>
          <div className="col-6">
            <p>Change color</p>
            <button
              onClick={() => {
                this.changeColor(red);
              }}
              className="text-white btn-danger"
            >
              Red color
            </button>
            <button
              onClick={() => {
                this.changeColor(silver);
              }}
              className="mx-3 text-dark"
            >
              Silver color
            </button>
            <button
              onClick={() => {
                this.changeColor(black);
              }}
              className="text-white btn-dark"
            >
              Dark color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Doimauxe;
