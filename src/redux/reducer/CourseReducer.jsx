import { GET_COURSE, GET_COURSE_BYID } from "./Action/Type";

const initialState = {
  listCourse: [],
  Course: {},
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE:
      state.listCourse = action.payload;
      return { ...state };
    case GET_COURSE_BYID:
      state.Course = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
