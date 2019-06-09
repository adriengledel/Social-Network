import {combineReducers} from 'redux';
import { userReducer } from './reducers/userReducer';
import { composeReducers, createReducer } from './composer';
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  data : userReducer
})


const rootReducer = combineReducers({
  user : userReducer
})

const reducers = [
  createReducer(userReducer)
]

const getRootReducer = () => {
 /*  rootReducerRetrieved = true; */

  return composeReducers(reducers);
}

export { getRootReducer };