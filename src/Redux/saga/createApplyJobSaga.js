import * as types from "../module/actionTypes";
import {
    takeLatest,
    put,
    all,
    fork,
    call
} from "redux-saga/effects";
import { createApplyJobSuccess, createApplyJobError } from "../module/createApplyJob";
import { createApplyJobAPI } from "../services/api";
import swal from 'sweetalert';

export function* createApplyJobAsysn({ payload }) {
    console.log(" saga paylod ", payload);
    try {
        const response = yield call(createApplyJobAPI, payload);
        console.log(" responsedasdasd", response);
        if (response.data.status == 200) {
            yield put(createApplyJobSuccess(response));
            swal({
                title: response?.data?.message,
                icon: "success",
            })
        }
    } catch (error) {
        const responseer = yield put(createApplyJobError(error.response));
        console.log(" responsedasdasd error", responseer);
    }
}

export function* reateApplyJob() {
    yield takeLatest(types.CREATE_APPLY_JOB_START, createApplyJobAsysn);
}

const reateApplyJobSagas = [fork(reateApplyJob)];

export default function* createApplyJobSaga() {
    yield all([...reateApplyJobSagas]);
}
