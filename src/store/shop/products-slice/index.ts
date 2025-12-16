import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};
type FilterState = {
  category?: string[];
  brand?: string[];
};

type FetchParams = {
  filterParams: FilterState;
  sortParams: string;
};
// export const fetchAllFilteredProducts = createAsyncThunk<any, FetchParams>(
//   "/products/fetchAllProducts",
//   async ({ filterParams, sortParams }) => {
//     const query = new URLSearchParams({
//       ...filterParams,
//       sortBy: sortParams,
//     });

//     const result = await axios.get(
//       `http://localhost:5000/api/shop/products/get?${query}`
//     );
//     console.log(result);
//     return result?.data;
//   }
// );
export const fetchAllFilteredProducts = createAsyncThunk<any, FetchParams>(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams }) => {
    const convertedParams: Record<string, string> = {
      sortby: sortParams,
      ...(filterParams.category && {
        category: filterParams.category.join(","),
      }),
      ...(filterParams.brand && {
        brand: filterParams.brand.join(","),
      }),
    };
    const query = new URLSearchParams(convertedParams);

    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get?${query}`
    );

    return result?.data;
  }
);
export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get/${id}`
    );
    return result?.data;
  }
);
const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});
export const { setProductDetails } = shoppingProductSlice.actions;
export default shoppingProductSlice.reducer;
