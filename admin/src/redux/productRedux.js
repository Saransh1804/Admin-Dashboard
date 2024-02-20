import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: null,
    error: false
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      console.log("dlt action triggered -----1----")
    },
    deleteProductSuccess: (state, action) => {
      // console.log("dlt action triggered ---------")
      console.log(action.payload)
      state.isFetching = false;
      // Filter out the deleted product from the products array
      state.products = state.products.filter((product) => product._id !== action.payload.id);
    },
    deleteProductFailure: (state) => {
      // console.log("dlt action failed ---------")
      state.isFetching = false;
      state.error = true;
    },
    updateProductStart: (state) => {
      state.isFetching = true;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      // Find the updated product in the array and replace it with the new data
      state.products[state.products.findIndex((item) =>
        item._id === action.payload._id)] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addProductStart: (state) => {
      state.isFetching = true;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  getProductStart,
  getProductFailure,
  getProductSuccess,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
  updateProductStart,
  updateProductFailure,
  updateProductSuccess,
  addProductStart,
  addProductFailure,
  addProductSuccess,
  test
} = productSlice.actions;

export default productSlice.reducer;
