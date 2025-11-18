import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { productReducer } from "../features/product/productSlice";
import themeReducer from "../features/theme/themeSlice"

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  darkMode : themeReducer,
});

export default rootReducer;

