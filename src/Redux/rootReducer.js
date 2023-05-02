// import { combineReducers } from "redux";
import { combineReducers } from "redux";
import getAllOurServiceReducer from "./reducer/getOurServiceReducer";
import getAllOurProductReducer from "./reducer/getOurProductReducer";
import getAllOurBlogReducer from "./reducer/getAllOurBlogReducer";
import getAllOurClientReducer from "./reducer/getOurClientReducer";

const rootReducer = combineReducers({
  getOurServices: getAllOurServiceReducer,
  getOurProduct: getAllOurProductReducer,
  getOurBlog: getAllOurBlogReducer,
  getOurClients : getAllOurClientReducer,
});

export default rootReducer;
