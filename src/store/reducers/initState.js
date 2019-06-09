export const userReducer = (state={}, action) => {
  switch(action.type){
    case 'INITIALE_STATE' : 
    console.log('reducer add user');
    return {
      ...state,
      user : action.user,
      users : action.users
    };

    case 'LOGIN_REQUESTED' : 
    console.log('reducer login');
    return {
      ...state,
      user : action.user,
    };
    
    default : return state;
    
  }
}