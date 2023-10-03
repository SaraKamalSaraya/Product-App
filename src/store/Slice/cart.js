import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  cart: [],
  counter: 0,
};
const counter = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    // ---------------------- cart page
    // add to cart
    addToCart: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload.id)
      if(product) {
        product.quantity = product.quantity + action.payload.quantity
      } else {
        state.cart.push({...action.payload})
        state.counter++
      }
    },

    // Increment
    incrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload)
      if(product.quantity >= product.stock) {
        product.quantity = product.stock
      } else {
        product.quantity++
      }
    },

    // Decrement
    decrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload)
      if(product.quantity === 1) {
        product.quantity = 1
      } else {
        product.quantity--
      }
    },

    // Remove
    removeProduct: (state, action) => {
      const updatedCart = state.cart.filter((product) => product.id !== action.payload)
      state.counter--
      state.cart = updatedCart
    },

    
  }
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = counter.actions;

export default counter.reducer;