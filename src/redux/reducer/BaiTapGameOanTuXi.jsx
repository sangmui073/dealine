import {
  KEO_BUA_BAO,
  PLAY_KEO_BUA_BAO,
  RESULT_KEO_BUA_BAO,
} from "./Action/Type";

const initialState = {
  menuGamePlay: [
    {
      hinhAnh: `./img/GameOanTuXi/bao.png`,
      value: "bao",
    },
    {
      hinhAnh: `./img/GameOanTuXi/keo.png`,
      value: "keo",
    },
    {
      hinhAnh: `./img/GameOanTuXi/bua.png`,
      value: "bua",
    },
  ],
  player: {
    hinhAnh: `./img/GameOanTuXi/keo.png`,
    value: "keo",
  },
  computer: {
    hinhAnh: `./img/GameOanTuXi/keo.png`,
    value: "keo",
  },
  result: {
    text: "Bạn thua SML",
    numberWin: 0,
    numberPlay: 0,
  },
};

const oanTuTiReducer = (state = initialState, action) => {
  switch (action.type) {
    case KEO_BUA_BAO:
      state.player = action.payload;
      return { ...state };
    case PLAY_KEO_BUA_BAO:
      state.computer = state.menuGamePlay[action.payload];

      return { ...state };
    case RESULT_KEO_BUA_BAO:
      const newResult = { ...state.result };
      newResult.numberPlay += 1;
      switch (state.player.value) {
        case "keo":
          if (state.computer.value === "bua") {
            newResult.text = "BẠN THUA SML";
          } else if (state.computer.value === "bao") {
            newResult.text = "I LOVE YOU 3000";
            newResult.numberWin += 1;
          } else {
            newResult.text = "HÒA";
          }
          break;
        case "bua":
          if (state.computer.value === "keo") {
            newResult.text = "I LOVE YOU 3000";
            newResult.numberWin += 1;
          } else if (state.computer.value === "bao") {
            newResult.text = "BẠN THUA SML";
          } else {
            newResult.text = "HÒA";
          }
          break;
        case "bao":
          if (state.computer.value === "bua") {
            newResult.text = "I LOVE YOU 3000";
            newResult.numberWin += 1;
          } else if (state.computer.value === "keo") {
            newResult.text = "BẠN THUA SML";
          } else {
            newResult.text = "HÒA";
          }
          break;
      }
      state.result = newResult;
      return { ...state };
    default:
      return state;
  }
};
export default oanTuTiReducer;
