export const userReducer = (state={}, action) => {
  switch(action.type){
    case 'ADD_USER' : 
    console.log('reducer');
    return {
      ...state,
      user : action.user,
    };
    
    default : return state;
    
  }
}