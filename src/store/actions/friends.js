
import API from 'utils/API';

export const friendRequest = (userIdSender, userIdRecipient) => {
  console.log(userIdSender)
  return (dispatch, getState) => {
    return API.friendRequest({userIdSender, userIdRecipient}).then(res => {
      console.log(res.data.friends)
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