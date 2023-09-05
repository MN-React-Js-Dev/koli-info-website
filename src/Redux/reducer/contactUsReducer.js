import * as types from "../module/actionTypes";

const initialState = {
  ContactUs: [],
  loading: false,
  isSuccess: false,
};

const contactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACT_US_START:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case types.CONTACT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        ContactUs: action.payload,
      };
    case types.CONTACT_US_ERROR:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactUsReducer;
