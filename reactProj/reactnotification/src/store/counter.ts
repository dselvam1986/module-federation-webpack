import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState= {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter', initialState, reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        reset(state){
            state.count = 0
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice;


// 
//Actions
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const RESET = 'RESET';

// interface IncrementAction {
//     type: typeof INCREMENT;
// }
// interface DecrementAction {
//     type: typeof DECREMENT;
// }
// interface ResetAction {
//     type: typeof RESET;
// }

// type CounterActionTypes = IncrementAction | DecrementAction | ResetAction;

// //Action function
// export function increment(): CounterActionTypes {
//     return {type: INCREMENT}
// }
// export function decrement(): CounterActionTypes {
//     return {type: DECREMENT}
// }
// export function reset(): CounterActionTypes {
//     return {type: RESET}
// }

// //Reducer
// export interface CounterState {
//     count: number;
// }

// const initialState: CounterState = {
//     count: 0,
// };

// export function counterReducer(state = initialState, action: CounterActionTypes){
//     switch(action.type) {
//         case "INCREMENT":
//             return {...state, count: state.count + 1};
//         case "DECREMENT":
//             return {...state, count: state.count - 1};
//         case "RESET":
//             return initialState
//         default:
//             return state;
//     }
// }