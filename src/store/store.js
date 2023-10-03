import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slice/cart";

export default configureStore({
    reducer: {
        cart: cart,
    },
});