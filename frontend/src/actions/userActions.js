import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_TEST_SUBMIT_FAIL, USER_TEST_SUBMIT_REQUEST, USER_TEST_SUBMIT_SUCCESS } from "../constants/userConstants"
import { OPTION_PICK_RESET } from '../constants/questionsConstants'

export const login = (info) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      info,
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  try {

    dispatch({
      type: USER_LOGOUT
    })

    dispatch({
      type: OPTION_PICK_RESET
    })

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const submitUserTest = (score) => async (dispatch, getState) => {
  try {

    dispatch({
      type: USER_TEST_SUBMIT_REQUEST
    })

    const {
      userLogin: { user }
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${user._id}/score`, {score}, config)
    
    dispatch({
      type: USER_TEST_SUBMIT_SUCCESS,
      payload: data
    })


    dispatch({
      type: OPTION_PICK_RESET
    })

  } catch (error) {
    dispatch({
      type: USER_TEST_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
