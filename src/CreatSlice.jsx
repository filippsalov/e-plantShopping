import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    increaseQuantity: (state, action) =>{
      const name = action.payload;
      
      let itemUpdate = state.items.find((item) => item.name === name);
        itemUpdate.quantity += 1;
      

    },
    DecreaseQuantity: (state, action) =>{
      const name = action.payload;
      
      let itemUpdate = state.items.find((item) => item.name === name);
      if (itemUpdate && itemUpdate.quantity -1 > 0) {

        itemUpdate.quantity -= 1;
      }

    },
  },
});

export const { addItem, removeItem, increaseQuantity, DecreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;