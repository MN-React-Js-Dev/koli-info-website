import { all } from "redux-saga/effects";
import serviceSaga from "./getAllOurServicesSaga";
import productSagas from "./getAllOurProductSaga";
import blogSaga from "./getAllOurBlogSaga";
import clientSaga from "./getAllOurClientSaga";
import CurrentOpeningSagas from "./getCurrentOpeningSaga";
import contactusSaga from "./contactUsSaga";
import employeesSaga from "./getAllEmployeeSaga";
import SingleOpeningSaga from "./getSingleOpeningsSaga";
import createApplyJobSaga from "./createApplyJobSaga";

export default function* rootSaga() {
  yield all([
    serviceSaga(),
    productSagas(),
    blogSaga(),
    clientSaga(),
    CurrentOpeningSagas(),
    contactusSaga(),
    employeesSaga(),
    SingleOpeningSaga(),
    createApplyJobSaga()
  ]);
}
