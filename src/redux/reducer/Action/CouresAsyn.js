import ActionCreator from ".";
import { fetchCoures } from "../../../Sever";
import { GET_COURSE, GET_COURSE_BYID } from "./Type";

const actionGetCourse = () => {
  return async (dispatch) => {
    try {
      const listCoures = await fetchCoures.getCouse();
      dispatch(ActionCreator(GET_COURSE, listCoures.data));
    } catch (error) {
      console.log(error);
    }
  };
};
const actionGetCourseById = (id) => {
  return async (dispatch) => {
    try {
      const Coure = await fetchCoures.getCouseById(id);
      dispatch(ActionCreator(GET_COURSE_BYID, Coure.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export { actionGetCourse, actionGetCourseById };
