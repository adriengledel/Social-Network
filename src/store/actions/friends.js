
import API from 'utils/API';

export const friendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient) => {
  console.log(userIdSender)
  return (dispatch, getState) => {
    return API.friendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient}).then(res => {
      console.log(res.data.friends)
      localStorage.setItem('friends', JSON.stringify(res.data.friends));
      dispatch(loadFriends(res.data.friends));
    })
    .catch(err => {
      console.log('errueru ');
    });
  };
}

export const updateFriendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient) => {
  return (dispatch, getState) => {
    return API.updateFriendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient}).then(res => {
      console.log(res.data.friends)
      localStorage.setItem('friends', JSON.stringify(res.data.friends));
      dispatch(loadFriends(res.data.friends));
    })
    .catch(err => {
      console.log('errueru ');
    });
  };
}

export const loadFriends = (friends) => ({
  type : 'LOAD_FRIENDS',
  friends
});