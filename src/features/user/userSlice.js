// userSlice.js
import { createCrudSlice } from "../createCrudSlice";
import { apiUrl } from "../../Api";

const sliceArgs = {
  name: "users",
  url: `${apiUrl}/users`,
  crud : true,
  initialState : {
    cartItems: [],
    totalPrice: 0,
  },
  reducers:{
    addToCart: (state, action) => {
      const product = action.payload; 

      const existing = state.cartItems.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.totalPrice += product.price;
    },
        removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (!item) return;

      state.totalPrice -= item.price * item.quantity;

      state.cartItems = state.cartItems.filter((i) => i.id !== id);
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      }
      else{
         state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },
      clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  }
};
export const { reducer: userReducer, actions: userActions } = createCrudSlice(sliceArgs);
