import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { productReducer } from "../features/product/productSlice";
import { themeReducer } from "../features/theme/themeSlice";

const rootReducer = combineReducers({
  [userReducer.name]: userReducer,
  [productReducer.name] : productReducer,
  [themeReducer.name] : themeReducer,
});

export default rootReducer;
