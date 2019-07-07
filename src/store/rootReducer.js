import {combineReducers} from 'redux';
import { userReducer } from './reducers/userReducer';
import { friendsReducer } from './reducers/friends';
import { wallsReducer } from './reducers/walls';
import { composeReducers, createReducer } from './composer';
import { connectRouter } from 'connected-react-router'
import { initState } from './reducers/initState';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  data : userReducer,
  friends : friendsReducer
})


const rootReducer = combineReducers({
  user : userReducer,
})

const reducers = [
  createReducer(initState),
  createReducer(userReducer),
  createReducer(wallsReducer),
  createReducer(friendsReducer)
]

export const getRootReducer = () => {
 /*  rootReducerRetrieved = true; */

  return composeReducers(reducers);
}
