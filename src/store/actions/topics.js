import API from 'utils/API';
import { socket } from 'Pages/ProfilPage/ProfilPage';

export const createTopic = (userIdSender, topic, topicId) => {
  return (dispatch, getState) => {
    API.createTopic({userIdSender, topic, topicId});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const deleteTopic = (topicId) => {
  return (dispatch, getState) => {
    API.deleteTopic({topicId});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const addFriendToTopic = (topicId, userIdRecipient) => {
  return (dispatch, getState) => {
    API.addFriendToTopic({topicId, userIdRecipient});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const joinTopic = (topicId, userId) => {
  return (dispatch, getState) => {
    API.joinTopic({topicId, userId});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const messageTopic = (topicId, userId, messageId, message) => {
  return (dispatch, getState) => {
    API.messageTopic({topicId, userId,  messageId, message});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const deleteMessageTopic = (topicId, messageId) => {
  return (dispatch, getState) => {
    API.deleteMessageTopic({topicId, messageId});
    /* socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      dispatch(loadTopics(datas));
    }); */
  };
}

export const loadTopics = (topics) => ({
  type : 'LOAD_TOPICS',
  topics
})