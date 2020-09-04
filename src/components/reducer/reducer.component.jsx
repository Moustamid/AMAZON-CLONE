export const initialState = {
   backet: [] ,
};

function reducer(state , action) {
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // LOGIC for adding items to basket
    break;
    case 'REMOVE_FROM_BASKET':
    // LOGIC for removing items to basket
    break;  

    default:
      return state;
  }
}


export default reducer ;

