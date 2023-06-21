import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [],
};

const restaurantSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {

        setRestaurants: {
            reducer: (state, action) => {
                state.restaurants = action.payload
            }
        }

    }
})

export const { setRestaurants } = restaurantSlice.actions;
  
  export default restaurantSlice.reducer;