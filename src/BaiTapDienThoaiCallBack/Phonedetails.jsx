import React, { Component } from "react";

class Phonedetails extends Component {
  render() {
    let {
      hinhAnh,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.props.chiTietSP;
    return (
      <>
        <div className="col-4">
          <div className="card">
            <h4 className="card-title text-center">{tenSP}</h4>
            <img className="card-img-top img-fluid" src={hinhAnh} alt={tenSP} />
          </div>
        </div>
        <div className="col-8">
          <h4 className="text-center">Thong so ky thuat</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Man Hinh</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>He Dieu Hanh</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Cammera Truoc</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Phonedetails;
