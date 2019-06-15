import { routerMiddleware, push } from 'react-router-redux'
import API from 'utils/API';
import {PROFIL_PAGE} from 'Routes/Paths';

export const loginRequested = (data) => {
  console.log(data)
  return (dispatch, getState) => {
    console.log('loginrequested')

     return API.login(data).then(res => {
      localStorage.setItem('itemName', JSON.stringify(res.data.token));
      localStorage.setItem('users', JSON.stringify(res.data.users));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch(loadUser(res.data.user));
      dispatch(loadUsers(res.data.users));
      console.log(res)
      dispatch(push(PROFIL_PAGE));
    })
    .catch(err => {
      console.log('errueru ');
    });
  };
}

const loadUser = (user) => ({
  type : 'LOAD_USER',
  user
});

export const loadUsers = (users) => ({
  type : 'LOAD_USERS',
  users
});
