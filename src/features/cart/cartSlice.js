import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  tax: 0.14,
  shipping: 500,
  cartTotal: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItems: (state, action) => {
      const { productItem } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === productItem.cartID);

      if (item) {
        item.amount += productItem.amount;
      } else {
        state.cartItems.push(productItem);
      }

      state.numItemsInCart += productItem.amount;
      state.cartTotal +=
        parseInt(productItem.amount) * parseInt(productItem.price);

      cartSlice.caseReducers.calculateCartTotal(state);

      toast.success("Item added to cart");
    },

    removeItems: (state, action) => {},
    clearItems: (state, action) => {},
    editItems: (state, action) => {},

    calculateCartTotal: (state) => {
      state.tax *= state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

export const { addItems, removeItems, clearItems, editItems } =
  cartSlice.actions;

export default cartSlice;
