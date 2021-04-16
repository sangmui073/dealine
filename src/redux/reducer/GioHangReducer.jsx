//khởi tạo giá trị ban đầu cho store con
const initialState = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      soLuong: 1,
    },
  ],
  tongSl: 0,
};

export const gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      const gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex((sp) => {
        return sp.maSP == action.spGioHang.maSP;
      });
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGioHang);
      }
      state.gioHang = gioHangUpdate;
      state.tongSl = gioHangUpdate.reduce((num, sp) => {
        return (num += sp.soLuong);
      }, 0);
      return { ...state };
    }

    case "TANG_GIAM_SP": {
      const { maSP, isCout } = action.sp;
      const gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex((sp) => {
        return sp.maSP == maSP;
      });
      if (index !== -1) {
        if (isCout) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          if (gioHangUpdate[index].soLuong > 0) {
            gioHangUpdate[index].soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      state.tongSl = gioHangUpdate.reduce((num, sp) => {
        return (num += sp.soLuong);
      }, 0);

      return { ...state };
    }
    default:
      return { ...state };
  }
  return { ...state };
};
