import * as types from "../module/actionTypes";
import { 
  takeLatest, put, all, fork, call } from "redux-saga/effects";
  import { contactUsSuccess, contactUsError } from "../module/contactUs";
  import { postContactUsAPI } from "../services/api";
  
  
export function* onContactUSAsync({ payload }) {
  try {
    const response = yield call(postContactUsAPI, payload);
    if (response.data.status == 200) {
      yield put(contactUsSuccess(response));
    
    }
  } catch (error) {
    yield put(contactUsError(error.response));
  }
}

export function* onContactus() {
  yield takeLatest(types.CONTACT_US_START, onContactUSAsync);
}

const contactUsSagas = [fork(onContactus)];

export default function* contactusSaga() {
  yield all([...contactUsSagas]);
}
