const initialState = {
  friends: JSON.parse(localStorage.getItem('friends'))
};
export const friendsReducer = (state={}, action) => {
  switch(action.type){
    case 'LOAD_FRIENDS' :
    return {
      ...state,
      friends : action.friends,
    };

    default : console.log(state) /* return state; */
    
  }
}