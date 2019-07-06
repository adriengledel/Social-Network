
import API from 'utils/API';
import { socket } from 'Pages/ProfilPage/ProfilPage';

export const friendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient, email) => {
  console.log(userIdSender)
  return (dispatch, getState) => {
    API.friendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient, email});
    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      dispatch(loadFriends(friends));
    });
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
  };
}

export const recommendRequest = (userIdSender, userIdRecipient, userIdRecommend, statusId, email) => {
  return (dispatch, getState) => {
    API.recommendFriendRequest({userIdSender, userIdRecipient, userIdRecommend, statusId, email});
    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      dispatch(loadFriends(friends));
    });
  };
}

export const validRecommendRequest = (userIdSender, userIdRecipient, statusIdSender, statusIdRecipient, email) => {
  console.log(userIdSender)
  return (dispatch, getState) => {
    API.validRecommendFriendRequest({userIdSender, userIdRecipient, statusIdSender, statusIdRecipient, email});
    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      dispatch(loadFriends(friends));
    });
  };
}

export const loadFriends = (friends) => ({
  type : 'LOAD_FRIENDS',
  friends
});