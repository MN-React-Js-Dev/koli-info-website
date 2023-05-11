import * as types from "./actionTypes";

export const contactUsStart = (contsactus) => ({
  type: types.CONTACT_US_START,
  payload: contsactus,
});

export const contactUsSuccess = (contsactus) => ({
  type: types.CONTACT_US_SUCCESS,
    payload: contsactus,
});

export const contactUsError = (error) => ({
  type: types.CONTACT_US_ERROR,
  payload: error,
});
