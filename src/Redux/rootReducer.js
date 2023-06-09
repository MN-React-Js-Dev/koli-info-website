// import { combineReducers } from "redux";
import { combineReducers } from "redux";
import getAllOurServiceReducer from "./reducer/getOurServiceReducer";
import getAllOurProductReducer from "./reducer/getOurProductReducer";
import getAllOurBlogReducer from "./reducer/getAllOurBlogReducer";
import getAllOurClientReducer from "./reducer/getOurClientReducer";
import getAllCurrentOpeningsReducer from "./reducer/getCurrentOpeningReducer";
import contactUsReducer from "./reducer/contactUsReducer";
import getAllEmployeeReducer from "./reducer/getAllEmployeeReducer";

const rootReducer = combineReducers({
  getOurServices: getAllOurServiceReducer,
  getOurProduct: getAllOurProductReducer,
  getOurBlog: getAllOurBlogReducer,
  getOurClients: getAllOurClientReducer,
  currentOpening: getAllCurrentOpeningsReducer,
  contactUs: contactUsReducer,
  employeeData: getAllEmployeeReducer,
});

export default rootReducer;
