import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as apiClient from '../service/api'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ProductListState = {
  products: Product[]
  loading: boolean
  error: boolean
}

const initialState: ProductListState = {
  products: [],
  loading: false,
  error: true,
}

export const fetchProducts = createAsyncThunk<{products: Product[]}>('fetchProducts', async () => {
  const response = await apiClient.fetchProducts()
  if (response.kind === 'success') {

     return {
      products: response.body ?? [],
    }
  } else {
    throw 'Error fetching products'
  }
})

const productListSlice = createSlice({
  name: 'productList',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = state.products.concat(action.payload.products)
        state.loading = false
      })
      .addCase(fetchProducts.rejected, state => {
        state.error = true
        state.loading = false
      })
  },
})

export default productListSlice.reducer
