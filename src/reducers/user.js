import { SET_USER_PAGE } from "../actions/user";

const initialState = {
 emailValue: '',
 passwordValue: '' ,
 isRegister: true
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_PAGE: {
      return {
        ...state,
        isRegister: !state.isRegister
      }
    }
    default:
      return state;
  }
};

export default reducer;