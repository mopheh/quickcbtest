import {  OPTION_PICK_RESET, OPTION_PICK_SUCCESS, QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_NUMBER_FAIL, QUESTION_NUMBER_REQUEST, QUESTION_NUMBER_SUCCESS } from "../constants/questionsConstants"

export const questionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true, questions: [] }
    case QUESTION_LIST_SUCCESS:
      return { loading: false, questions: action.payload }
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionNumberReducer = (state = { question: 0 }, action) => {
  switch (action.type) {
    case QUESTION_NUMBER_REQUEST:
      return { loading: true, question: null}
    case QUESTION_NUMBER_SUCCESS:
      return { loading: false, question: action.payload }
    case QUESTION_NUMBER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const optionPickReducer = (state = { options: { } }, action) => {
  const option = action.payload
  switch (action.type) {
    case OPTION_PICK_SUCCESS:
      return { ...state, options: { ...state.options, ...option } }
    case OPTION_PICK_RESET:
      return { options: { } }
    default:
      return state
  }
}