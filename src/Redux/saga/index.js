import { all } from 'redux-saga/effects';
import serviceSaga from './getAllOurServicesSaga'
import productSagas from './getAllOurProductSaga'
import blogSaga from './getAllOurBlogSaga';


export default function* rootSaga() {
   yield all([
    serviceSaga(),
    productSagas(),
    blogSaga(),
   ]);
}