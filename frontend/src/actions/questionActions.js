import {  OPTION_PICK_FAIL, OPTION_PICK_REQUEST, OPTION_PICK_SUCCESS, QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_NUMBER_FAIL, QUESTION_NUMBER_REQUEST, QUESTION_NUMBER_SUCCESS } from "../constants/questionsConstants"
import axios from 'axios'

export const listQuestions = (  ) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_LIST_REQUEST })
    const { data } = await axios.get(`/api/questions/`)

    dispatch({
      type: QUESTION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const numberQuestions = ( number ) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_NUMBER_REQUEST })

    dispatch({
      type: QUESTION_NUMBER_SUCCESS,
      payload: number,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_NUMBER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const pickOption = ( question, number ) => async (dispatch) => {
  try {
    dispatch({ type: OPTION_PICK_REQUEST })

    const data = {}
    data[`${question}`] = Number(number)

    dispatch({
      type: OPTION_PICK_SUCCESS,
      payload: { ...data },
    })
  } catch (error) {
    dispatch({
      type: OPTION_PICK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}