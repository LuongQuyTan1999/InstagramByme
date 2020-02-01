import * as userTypes from '../constants/userPersonal'

export const getUserPersonal = () => ({
  type: userTypes.GET_USER_PERSONAL
})

export const getUserPersonalSuccess = (data) => ({
  type: userTypes.GET_USER_PERSONAL_SUCCESS,
  payload: {
    data
  }
})

export const getUserPersonalFailed = (err) => ({
  type: userTypes.GET_USER_PERSONAL_FAILED,
  payload: {
    err
  }
})
