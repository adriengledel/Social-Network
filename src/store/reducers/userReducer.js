const initialState = {
    /* users: JSON.parse(localStorage.getItem('users')),
    user: JSON.parse(localStorage.getItem('user')) */
  };
export const userReducer = (state={}, action) => {
  switch(action.type){
    case 'LOAD_USER' : 
    return {
      ...state,
      user : action.user,
    };

    case 'LOAD_USERS' : 
    return {
      ...state,
      users : action.users,
    };

    default : return state;
    
  }
}