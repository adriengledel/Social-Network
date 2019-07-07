const initialState = {
  users    : JSON.parse(localStorage.getItem('users')),
  user     : JSON.parse(localStorage.getItem('user')),
  friends  : JSON.parse(localStorage.getItem('friends')),
  walls    : JSON.parse(localStorage.getItem('walls'))
};

export const friendsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'LOAD_FRIENDS' :
    return {
      ...state,
      friends : action.friends,
    };

    default : return state;
    
  }
}