const initialState = {
    users: JSON.parse(localStorage.getItem('users'))
  };
export const userReducer = (state=initialState, action) => {
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