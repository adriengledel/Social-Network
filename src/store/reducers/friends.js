
export const friendsReducer = (state={}, action) => {
  switch(action.type){
    case 'LOAD_FRIENDS' : 
    return {
      ...state,
      friends : action.friends,
    };

    default : return state;
    
  }
}