import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <div className="text-center">
        <img src="./img/cybersoft.png" alt="hình ảnh" />
        <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: 10 }}>
          CyberSoft.edu - Đào tạo chuyên gia lập trình - Dự án thử đồ trực tuyến
          - Dressing Room
        </p>
      </div>
    );
  }
}

export default Header;
