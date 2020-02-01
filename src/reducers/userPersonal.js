import * as userTypes from "../constants/userPersonal";
const initialState = {
  dataUserPersonal: []
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USER_PERSONAL_SUCCESS:
      const { payload } = action;
      const { data } = payload;
      return {
        ...state,
        dataUserPersonal: data
      };
    default:
      return state;
  }
};
export default api;
