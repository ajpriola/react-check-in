// importing 'regenerator-runtime/runtime' fixed runtime error
// https://github.com/redux-saga/redux-saga/issues/280
import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga/effects';
import { ADD_PATIENT, SERVE_PATIENT, FINISH_PATIENT } from '../constants/ActionTypes';

const handlePatients = function* handlePatients(params) {
  yield takeEvery(ADD_PATIENT, (action) => {
    params.socket.emit(ADD_PATIENT, action.patient);
  });

  yield takeEvery(SERVE_PATIENT, (action) => {
    params.socket.emit(SERVE_PATIENT, action.patient);
  });

  yield takeEvery(FINISH_PATIENT, (action) => {
    params.socket.emit(FINISH_PATIENT, action.patient);
  });
};

export default handlePatients;
