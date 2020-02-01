import * as apiTypes from "../constants/api";
const initialState = {
  data: []
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case apiTypes.GET_DATA_API_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        data : payload.data
      };
    default:
      return state;
  }
};
export default api;
