import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productListSlice from '../reducers/product.slice';

const rootReducer = combineReducers({
  productList: productListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;