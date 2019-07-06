import API from 'utils/API';
import { socket } from 'Pages/ProfilPage/ProfilPage';

export const messageRequest = (userIdSender, userIdRecipient, messageId, message, email) => {
  return (dispatch, getState) => {
    API.messageRequest({userIdSender, userIdRecipient, messageId, message, email});
    socket.on('messagesData', (messages) =>{
      localStorage.setItem('messages', JSON.stringify(messages));
      dispatch(loadMessages(messages));
    });
  };
}

export const loadMessages = (messages) => ({
  type : 'LOAD_MESSAGES',
  messages
});