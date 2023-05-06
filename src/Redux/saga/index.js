import { all } from "redux-saga/effects";
import serviceSaga from "./getAllOurServicesSaga";
import productSagas from "./getAllOurProductSaga";
import blogSaga from "./getAllOurBlogSaga";
import clientSaga from "./getAllOurClientSaga";
import CurrentOpeningSagas from "./getAllCOpeningsSaga";
import contactusSaga from "./contactUsSaga";
import employeesSaga from "./getAllEmployeeSaga";

export default function* rootSaga() {
  yield all([
    serviceSaga(),
    productSagas(),
    blogSaga(),
    clientSaga(),
    CurrentOpeningSagas(),
    contactusSaga(),
    employeesSaga(),
  ]);
}
