'use client';

import { createSlice } from '@reduxjs/toolkit';

export type modeState = {
    mode: string
}

const initialState: modeState = {
    mode: "light"
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state,action) => { state.mode = action.payload.mode },
    }
})

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;