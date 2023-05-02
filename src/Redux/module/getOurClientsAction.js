import * as types from "./actionTypes";

export const getAllOurClientStart = () => ({
  type: types.GETALL_OUR_CLIENT_START,
});

export const getAllOurClientSuccess = (clients) => ({
  type: types.GETALL_OUR_CLIENT_SUCCESS,
  payload: clients,
});

export const getAllOurClientError = (error) => ({
  type: types.GETALL_OUR_CLIENT_ERROR,
  payload: error,
});
