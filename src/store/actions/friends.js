
import API from 'utils/API';
import { socket } from 'Pages/ProfilPage/ProfilPage';

export const friendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient) => {
  console.log(userIdSender)
  return (dispatch, getState) => {
    API.friendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient});
    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      dispatch(loadFriends(friends));
    });
    /* return API.friendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient}).then(res => {
      console.log(res.data.friends)
      localStorage.setItem('friends', JSON.stringify(res.data.friends));
      dispatch(loadFriends(res.data.friends));
    })
    .catch(err => {
      console.log('errueru ');
    }); */
  };
}

export const updateFriendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient) => {
  return (dispatch, getState) => {
    API.updateFriendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient});
    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      dispatch(loadFriends(friends));
    });
    /* return API.updateFriendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient}).then(res => {
      console.log(res.data.friends)
      localStorage.setItem('friends', JSON.stringify(res.data.friends));
      dispatch(loadFriends(res.data.friends));
    })
    .catch(err => {
      console.log('errueru ');
    }); */
  };
}

export const loadFriends = (friends) => ({
  type : 'LOAD_FRIENDS',
  friends
});