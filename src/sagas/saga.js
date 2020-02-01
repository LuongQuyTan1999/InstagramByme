import { call, put, takeLatest } from "redux-saga/effects";
import * as actionApi from "../actions/api";
import * as apiTypes from "../constants/api";
import * as actionUser from "../actions/userPesonal";
import * as userTypes from "../constants/userPersonal";
import { getList } from "../apis/taskApi";
import { getUserPersonal } from "../apis/userApi";

function* getDataApiSaga() {
  try {
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === 200) {
      yield put(actionApi.getDataApiSuccess(data));
    } else {
      yield put(actionApi.getDataApiFailed(data));
    }
  } catch (err) {
    yield put(actionApi.getDataApiFailed(err));
  }
}

function* getUserPersonalApi() {
  try {
    const resp = yield call(getUserPersonal);
    const { status, data } = resp;
    if (status === 200) {
      yield put(actionUser.getUserPersonalSuccess(data));
    } else {
      yield put(actionUser.getUserPersonalFailed(data));
    }
  } catch (err) {
    yield put(actionUser.getUserPersonalFailed(err));
  }
}

function* mySaga() {
  yield takeLatest(apiTypes.GET_DATA_API, getDataApiSaga);
  yield takeLatest(userTypes.GET_USER_PERSONAL, getUserPersonalApi);
}

export default mySaga;
