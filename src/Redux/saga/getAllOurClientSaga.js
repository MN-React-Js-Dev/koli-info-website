import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";

import {
  getAllOurServicesSuccess,
  getAllOurServicesError,
} from "../module/getOurServiceAction";
import { getAllOurClientSuccess,getAllOurClientError } from "../module/getOurClientsAction";

import { getAllOurServicesAPI } from "../services/api";
import { getAllOurAllClientAPI } from "../services/api";

function* onGetALLClientStartAsync() {
  try {
    const response = yield call(getAllOurAllClientAPI);
    if (response.data.status == 200) {
      yield put(getAllOurClientSuccess(response.data));
      console.log('client saga  successsssssss.........')
    }
  } catch (error) {
    yield put(getAllOurClientError(error.response));
    console.log('client saga  errorrrrr.........')
  }
}

function* onGetAllClient() {
  yield takeLatest(types.GETALL_OUR_CLIENT_START, onGetALLClientStartAsync);
}
const clientsSagas = [fork(onGetAllClient)];
export default function* clientSaga() {
  yield all([...clientsSagas]);
}
