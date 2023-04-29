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


import { getAllOurBlogSuccess,getAllOurBlogError } from "../module/getOurBlogAction";

import { getAllOurblogAPI} from "../services/api";

export function* onGetALLBlogStartAsync() {
  try {
    const response = yield call(getAllOurblogAPI);
    console.log("Product resposne!!>>>", response);
    if (response.data.status == 200) {
      console.log("SUCCESS-------~~~~~000000000000", response)
      yield put(getAllOurBlogSuccess(response));
      // yield put(push("/home"));  
    }
  }
  catch (error) {
    yield put(getAllOurBlogError(error.response));
  }
}


export function* onGetAllBlog() {
  yield takeLatest(types.GETALL_OUR_BLOG_START,onGetALLBlogStartAsync );
}

const blogSagas = [
  fork(onGetAllBlog),
];



export default function* blogSaga() {
  yield all([...blogSagas]);
}