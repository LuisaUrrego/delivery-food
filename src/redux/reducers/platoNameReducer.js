import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    platoName: "",
};

const platoNameSlice = createSlice({
    name: 'platoSelected',
    initialState,
    reducers: {

        setPlatoName: {
            reducer: (state, action) => {
                state.platoName = action.payload
            }
        }

    }
})

export const { setPlatoName } = platoNameSlice.actions;
  
  export default platoNameSlice.reducer;