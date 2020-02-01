import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import api from "./api";
import userPersonal from "./userPersonal";
export default combineReducers({
  api,
  userPersonal,
  form: formReducer
});
