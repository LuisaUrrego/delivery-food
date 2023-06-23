import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 shoppingCart: [],
};

const shoppingCartSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {

        agregarElemento: (state, action) => {
            state.shoppingCart.push(action.payload);
          }
    }
})

export const { agregarElemento } = shoppingCartSlice.actions;
  
  export default shoppingCartSlice.reducer;