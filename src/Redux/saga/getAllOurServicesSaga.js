import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";

import {
  getAllOurServicesSuccess,
  getAllOurServicesError,
} from "../module/getOurServiceAction";

import { getAllOurServicesAPI } from "../services/api";

function* onGetALLServicesStartAsync() {
  try {
    const response = yield call(getAllOurServicesAPI);
    if (response.data.status == 200) {
      yield put(getAllOurServicesSuccess(response.data));
    }
  } catch (error) {
    yield put(getAllOurServicesError(error.response));
  }
}

function* onGetAllServices() {
  yield takeLatest(types.GETALL_OUR_SERVICES_START, onGetALLServicesStartAsync);
}
const servicesSagas = [fork(onGetAllServices)];
export default function* serviceSaga() {
  yield all([...servicesSagas]);
}
