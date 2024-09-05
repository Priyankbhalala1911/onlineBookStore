import { configureStore } from "@reduxjs/toolkit";
import bookCart from "./reducer";

const store = configureStore({
    reducer:{
        Cart:bookCart.reducer
    }
})
export default store;