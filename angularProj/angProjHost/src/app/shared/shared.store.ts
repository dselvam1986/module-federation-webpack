import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState= {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter', 
    initialState, 
    reducers: {
        increment: (state) => ({...state, count: state.count + 1}),
        decrement: (state) => ({...state, count: state.count - 1}),
        reset: (state) => ({...state, count: initialState.count }),
    }
});



export const sharedStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});


export const { increment, decrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;