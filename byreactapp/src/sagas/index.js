import { call, put, delay, takeEvery } from 'redux-saga/effects'

function* increamentAsync(action) {
  console.log(action);
  yield delay(1000);
  yield put({
    type:'Increament4'
  })
}

function* rootSaga() {
  yield takeEvery('IncreamentAsync4',increamentAsync);
}

export default rootSaga;