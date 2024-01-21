import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  tax: 0,
  shipping: 500,
  cartTotal: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItems: (state, action) => {
      console.log(action.payload);
    },

    removeItems: (state, action) => {},
    clearItems: (state, action) => {},
    editItems: (state, action) => {},
  },
});

export const { addItems, removeItems, clearItems, editItems } =
  cartSlice.actions;

export default cartSlice;
