import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;