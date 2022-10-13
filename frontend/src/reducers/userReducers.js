import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_TEST_SUBMIT_FAIL, USER_TEST_SUBMIT_REQUEST, USER_TEST_SUBMIT_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = ( state = { }, action)  => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{ loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userTestSubmitReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TEST_SUBMIT_REQUEST:
      return { loading: true }
    case USER_TEST_SUBMIT_SUCCESS:
      return { loading: false, success: true, score: action.payload }
    case USER_TEST_SUBMIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}