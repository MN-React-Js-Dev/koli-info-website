import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import { 
  getAllOurClientSuccess,
  getAllOurClientError
 } from "../module/getOurClientsAction";


import { getAllOurAllClientAPI } from "../services/api";

function* onGetALLClientStartAsync() {
  try {
    const response = yield call(getAllOurAllClientAPI);
    if (response.data.status == 200) {
      yield put(getAllOurClientSuccess(response.data));  
    }
  } catch (error) {
    yield put(getAllOurClientError(error.response));
  }
}

function* onGetAllClient() {
  yield takeLatest(types.GETALL_OUR_CLIENT_START, onGetALLClientStartAsync);
}
const clientsSagas = [fork(onGetAllClient)];
export default function* clientSaga() {
  yield all([...clientsSagas]);
}
