import { actionTypes } from './actionsType';

const initialState = {
  posts: {},
  loading: false,
  error: null
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_DATA:
      return{
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.GET_SUCESFULLE:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload
      }
    case actionTypes.GET_FALTURE:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
