const initialState = {
  friends: JSON.parse(localStorage.getItem('friends'))
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