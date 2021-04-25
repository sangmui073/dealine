import ActionCreator from ".";
import { fetchUser } from "../../../Sever";
import { POST_USER, Sign } from "./Type";

const ActionPostUser = (value) => {
  return (dispatch) => {
    fetchUser
      .postUser(value)
      .then((res) => {
        console.log(res);
        dispatch(ActionCreator(POST_USER, value));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const ActionSign = (value) => {
  return async (dispatch) => {
    try {
      const { data, status, request } = await fetchUser.SignInUser(value);

      if (status !== 200) {
        console.log("loi");
        alert(request.response);
      }
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(ActionCreator(Sign, data));
    } catch (error) {
      // console.log(error.response);
      alert(error.response.data);
    }
  };
};

export { ActionPostUser, ActionSign };
// fetchUser
//   .SignInUser(value)
//   .then((res) => {
//     console.log(res);
//     dispatch(ActionCreator(Sign, value));
//   })
//   .catch((err) => {
//     console.log(err);
//   });
