import {
  ADD_TAKS,
  CHECK_TAKS,
  DELETE_TAKS_TODO,
  EDIT_TAKS,
  DELETE_TAKS_COMPLETE,
  UPDATE_TAKS,
} from "./Action/Type";

const initialState = {
  configTheme: {
    color: "#fff",
    background: "#000",
  },
  taskEdit: {
    taksName: "",
    id: 0,
    checkTask: false,
  },
  taksList: [
    // {
    //   taksName: " sd ",
    //   id: Date.now(),
    //   checkTask: false,
    // },
  ],
  disibleBtn: true,
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAKS: {
      const { taksName } = action.payload;
      const index = state.taksList.findIndex((taks) => {
        return taks.taksName.trim() === taksName.trim();
      });
      if (index !== -1) {
        return { ...state };
      } else {
        const newTaskToDo = [...state.taksList];
        newTaskToDo.push(action.payload);
        state.taksList = newTaskToDo;
      }
      return { ...state };
    }
    case EDIT_TAKS: {
      state.taskEdit = action.payload;
      state.disibleBtn = false;
      return { ...state };
    }
    case DELETE_TAKS_TODO: {
      const newTaksList = state.taksList.filter((taks) => {
        return taks.id !== action.payload.id;
      });
      state.taksList = newTaksList;
      return { ...state };
    }
    case CHECK_TAKS: {
      const taksListUpdate = [...state.taksList];
      const indexNewTaksList = taksListUpdate.findIndex((taks) => {
        return taks.id === action.payload.id;
      });
      if (indexNewTaksList !== -1) {
        taksListUpdate[indexNewTaksList].checkTask = true;
        state.taksList = taksListUpdate;
      }
      return { ...state };
    }
    case DELETE_TAKS_COMPLETE: {
      state.taksList = state.taksList.filter((taks) => {
        return taks.id !== action.payload.id;
      });
      return { ...state };
    }
    case UPDATE_TAKS: {
      const index = state.taksList.findIndex((taks) => {
        return taks.id === action.payload.id;
      });
      if (index !== -1) {
        const newTaksList = [...state.taksList];
        newTaksList[index] = action.payload;
        state.taksList = newTaksList;
        state.disibleBtn = true;
      }
      return { ...state };
    }
    default:
      return state;
  }
};
export default todolistReducer;
