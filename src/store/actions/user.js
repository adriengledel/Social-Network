import { routerMiddleware, push } from 'react-router-redux'
import API from 'utils/API';
import {PROFIL_PAGE} from 'Routes/Paths';
import { loadFriends } from 'store/actions/friends';

export const loginRequested = (data) => {
  return (dispatch, getState) => {

     return API.login(data).then(res => {
      localStorage.setItem('itemName', JSON.stringify(res.data.token));
      localStorage.setItem('users', JSON.stringify(res.data.users));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('friends', JSON.stringify(res.data.friends));
      dispatch(loadUser(res.data.user));
      dispatch(loadUsers(res.data.users));
      dispatch(loadFriends(res.data.friends));
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
