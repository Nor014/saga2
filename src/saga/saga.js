import { spawn, take, put, fork, call } from 'redux-saga/effects';
import { searchService, getList, setList, setError, setDetails, setDetailsError } from '../actions/actions'

function* getDataSaga(action) {
  try {
    const data = yield call(searchService, action.payload)
    yield action.payload ? put(setDetails(data)) : put(setList(data))
  } catch (error) {
    yield action.payload ? put(setDetailsError(error.message)) : put(setError(error.message))
  }
}

function* listWatchSaga() {
  while (true) {
    const action = yield take('GET_LIST')
    yield fork(getDataSaga, action)
  }
}

function* detailsWatchSaga() {
  while (true) {
    const action = yield take('GET_DETAILS')
    yield fork(getDataSaga, action)
  }
}

export default function* saga() {
  yield spawn(listWatchSaga)
  yield spawn(detailsWatchSaga)
}