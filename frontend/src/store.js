import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slice/ProductSlice"
import wishlistreducer from "./slice/WishlistSlice"
import allProductsreducer from "./slice/AllProductSlice"
import AllOrderDetailreducer from "./slice/OrderDetail"
const store = configureStore({
  reducer:{
    cartslice:cartreducer,
    WishlistSlice:wishlistreducer,
    allProducts:allProductsreducer,
    OrderdetailSlice:AllOrderDetailreducer

  }
});

export default store;