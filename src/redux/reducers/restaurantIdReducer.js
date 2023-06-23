import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    resturantId: "",
};

const restaurantIdSlice = createSlice({
    name: 'restaurantSelected',
    initialState,
    reducers: {

        setRestaurantId: {
            reducer: (state, action) => {
                state.resturantId = action.payload
            }
        }

    }
})

export const { setRestaurantId } = restaurantIdSlice.actions;
  
  export default restaurantIdSlice.reducer;