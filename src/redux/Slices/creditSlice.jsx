import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "",
}

const creditSlice = createSlice({
    name: "credit",
    initialState,
    reducers: {
        setSelectedValue: (state, action) => {
            state.selected = action.payload;
        }
    }
})

export const { setSelectedValue } = creditSlice.actions;

export default creditSlice.reducer;