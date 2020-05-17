import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { posts } from '../Redux/Prueba/reducers';
import postSata from '../Redux/Prueba/saga';
import { call, all } from 'redux-saga/effects';

const root = combineReducers ({
  posts
});

function * rootSaga() {
  yield all([call(postSata)])
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (process.env.NODE_ENV === `development`)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(root, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
