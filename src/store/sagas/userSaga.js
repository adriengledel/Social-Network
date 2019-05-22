import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'utils/API';
import { userReducer } from '../reducers/userReducer';
import axios from 'axios';



function* signUpSaga(user){
  console.log('signUpSaga');
    API.signup(user)
  
}

function* userSaga(){
  yield takeEvery('ADD_USER', signUpSaga);
}

export default userSaga;