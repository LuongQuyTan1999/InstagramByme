import * as apiTypes from "../constants/api";

export const getDataApi = data => ({
  type: apiTypes.GET_DATA_API,
  payload: {
    data
  }
});

export const getDataApiSuccess = data => ({
  type: apiTypes.GET_DATA_API_SUCCESS,
  payload: {
    data
  }
});

export const getDataApiFailed = err => ({
  type: apiTypes.GET_DATA_API_FAILED,
  payload: {
    err
  }
});


