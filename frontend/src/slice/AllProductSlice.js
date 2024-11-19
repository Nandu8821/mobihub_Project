import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allproducts: [],
}

const AllProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      // allproducts=action.payload;
      // state.allproducts = action.payload;
      // console.log(action.payload)

    },
  }
})

export default AllProductSlice.reducer;
export const { setAllProducts } = AllProductSlice.actions;