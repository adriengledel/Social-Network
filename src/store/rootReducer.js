import {combineReducers} from 'redux';
import { userReducer } from './reducers/userReducer';
import { friendsReducer } from './reducers/friends';
import { composeReducers, createReducer } from './composer';
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  data : userReducer,
  friends :  friendsReducer
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