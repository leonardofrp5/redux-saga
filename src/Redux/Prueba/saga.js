import { call, put, takeEvery, all } from 'redux-saga/effects';
import { actionTypes } from './actionsType';
import { getSucesfulle, getFalture } from './actions';
import { getData } from '../../api';

function * get({injections:redirect}){
  try  {
    const response = yield call(getData);
    yield put(getSucesfulle(response));
    yield redirect()
  }catch(error) {
    yield put(getFalture(error));
  }
}

function * getById({payload:id}){
  try  {
    const response = yield call(getData, id);
    yield put(getSucesfulle(response));
  }catch(error) {
    yield put(getFalture(error));
  }
}

function * onGet(){
  yield takeEvery(actionTypes.GET_DATA, get);
  yield takeEvery(actionTypes.GET_DATA, getById);
}

export default function * (){
  yield all([call(onGet)]);
}


