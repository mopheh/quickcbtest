import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { questionListReducer, questionNumberReducer, optionPickReducer } from './reducers/questionsReducers'
import { userLoginReducer, userTestSubmitReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    questionList: questionListReducer,
    questionNumber: questionNumberReducer,
    optionPick: optionPickReducer,
    userTestSubmit: userTestSubmitReducer

})


const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
