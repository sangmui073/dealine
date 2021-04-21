const initialState = {
  mangSV: [
    {
      maSV: "024348",
      hoTen: "Nguyễn Văn A",
      soDT: "0983884476",
      email: "sangmui073@gmail.com",
    },
  ],
};

export const QuanlySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const newMangSV = [...state.mangSV];
      newMangSV.push(action.sinhVien);
      state.mangSV = newMangSV;
      return { ...state };
    }
    default:
      return state;
  }
};
