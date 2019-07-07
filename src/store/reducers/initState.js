const initialState = {
  users    : JSON.parse(localStorage.getItem('users')),
  user     : JSON.parse(localStorage.getItem('user')),
  friends  : JSON.parse(localStorage.getItem('friends')),
  walls    : JSON.parse(localStorage.getItem('walls'))
};
export const initState = (state=initialState, action) => {
  switch(action.type){
    case 'LOAD_INIT_STATE' : 
    console.log('reducer add user');
    return {
      ...state,
      user : action.user,
      users : action.users,
      friends : action.friends,
      walls : action.walls
    };

    default : return state;
    
  }
}