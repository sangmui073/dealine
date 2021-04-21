const initialState = {
  buger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 10,
    beef: 10,
  },
  total: 30,
};

export const BugerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TANG_GIAM_MON": {
      const { tenMon, tangGiam } = action;

      const newBuger = { ...state.buger };
      if (tangGiam !== -1) {
        newBuger[tenMon] += 1;
      } else {
        if (newBuger[tenMon] > 0) {
          newBuger[tenMon] -= 1;
        }
      }
      let soLuong = 0;
      for (let key in newBuger) {
        soLuong += newBuger[key] * 10;
      }

      state.total = soLuong;
      state.buger = newBuger;
      return { ...state };
    }

    default:
      return state;
  }
};
