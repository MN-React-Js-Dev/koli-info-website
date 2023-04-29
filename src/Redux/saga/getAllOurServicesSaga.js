import * as types from "../module/actionTypes";
import { push } from 'react-router-redux';
import { useNavigate } from "react-router-dom";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
/* import { push } from 'react-router-redux'; */

import { getAllOurServicesSuccess,getAllOurServicesError } from "../module/getOurServiceAction";

import { getAllOurServicesAPI } from "../services/api";

function* onGetALLServicesStartAsync() {
  try {
    const response = yield call(getAllOurServicesAPI);
    if (response.data.status == 200) {
      // console.log("SUCCESS~~~~~", response.data)
      yield put(getAllOurServicesSuccess(response.data));
      // yield put(push("/home"));  
    }
  }
  catch (error) {
    yield put(getAllOurServicesError(error.response));
  }
}


function* onGetAllServices() {
  yield takeLatest(types.GETALL_OUR_SERVICES_START,onGetALLServicesStartAsync );
}

const servicesSagas = [
  fork(onGetAllServices),
];



export default function* serviceSaga() {
  yield all([...servicesSagas]);
}