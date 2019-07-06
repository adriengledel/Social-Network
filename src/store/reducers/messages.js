
export const messagesReducer = (state={}, action) => {
  switch(action.type){
    case 'LOAD_MESSAGES' :
    return {
      ...state,
      messages : action.messages,
    };

    default : console.log(state) /* return state; */
    
  }
}