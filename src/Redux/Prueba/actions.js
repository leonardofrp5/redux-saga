import { actionTypes } from './actionsType';

export const getData = (payload, injections) => ({
  type: actionTypes.GET_DATA,
  payload,
  injections
});

export const getSucesfulle = (payload) => ({
  type: actionTypes.GET_SUCESFULLE,
  payload
});

export const getFalture = (payload) => ({
  type: actionTypes.GET_FALTURE,
  payload
})
