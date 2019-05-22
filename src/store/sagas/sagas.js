import { fork, all} from 'redux-saga/effects'
import userSaga from './userSaga'

const sagas = [
  userSaga(),
]

const rootSaga = () => {
  return function* () {
   /*  yield sagas.map(saga=>fork(saga)); */
    yield all(sagas)
    
  }
}

export { rootSaga };