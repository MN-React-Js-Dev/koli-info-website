import * as types from "../module/actionTypes";
import { push } from 'react-router-redux';
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

import { getAllOurProductSuccess,getAllOurProductError } from "../module/getOurProductAction";

import { getAllOurProductAPI } from "../services/api";

export function* onGetALLProductStartAsync() {
  try {
    const response = yield call(getAllOurProductAPI);
    console.log("Product resposne!!>>>", response);
    if (response.data.status == 200) {
    //   console.log("SUCCESS-------~~~~~", response)
      yield put(getAllOurProductSuccess(response));
      // yield put(push("/home"));  
    }
  }
  catch (error) {
    yield put(getAllOurProductError(error.response));
  }
}


export function* onGetAllProduct() {
  yield takeLatest(types.GETALL_OUR_PRODUCT_START,onGetALLProductStartAsync );
}

const productsSagas = [
  fork(onGetAllProduct),
];



export default function* productSaga() {
  yield all([...productsSagas]);
}