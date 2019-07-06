import {combineReducers} from 'redux';
import { userReducer } from './reducers/userReducer';
import { friendsReducer } from './reducers/friends';
import { messagesReducer } from './reducers/messages';
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
  createReducer(userReducer),
  createReducer(friendsReducer),
  createReducer(messagesReducer),
  createReducer(initState)
]

export const getRootReducer = () => {
 /*  rootReducerRetrieved = true; */

  return composeReducers(reducers);
}
