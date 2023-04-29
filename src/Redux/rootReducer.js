import { combineReducers } from "redux";

import getAllOurServiceReducer from "./reducer/getOurServiceReducer";
import getAllOurProductReducer from "./reducer/getOurProductReducer";
import getAllOurBlogReducer from "./reducer/getAllOurBlogReducer";

const rootReducer = combineReducers({
  getOurServices: getAllOurServiceReducer,
  getOurProduct: getAllOurProductReducer,
  getOurBlog: getAllOurBlogReducer,
});

export default rootReducer;
