import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "../slicer/cart-slicer";

export default configureStore({
    reducer:{
        store : cartSlicer
    }
})