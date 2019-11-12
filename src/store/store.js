import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import listReducer from '../reducers/listReducer';
import detailsReducer from '../reducers/detailsReducer';
import saga from '../saga/saga';

const reducer = combineReducers({
  listState: listReducer,
  detailsState: detailsReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

export default store