import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.reducer";


const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});


export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./counter.reducer";

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// })

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;