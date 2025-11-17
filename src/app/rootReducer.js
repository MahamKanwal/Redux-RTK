import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { userReducer } from "../features/user/userSlice";
import { productReducer } from "../features/product/productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  products: productReducer,
});

export default rootReducer;

