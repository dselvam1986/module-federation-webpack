// import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';
 
// export interface CounterState {
//   count: number
// }
// export const initialState: CounterState = {
//   count: 0
// }
 
// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => ({ count: state.count + 1 })),
//   on(decrement, (state) => ({ count: state.count - 1})),
//   on(reset, () => initialState),
// );
 
// export function counterReducer(state:any, action: any) {
//   return _counterReducer(state, action);
// }
