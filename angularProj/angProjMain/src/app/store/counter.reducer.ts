import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CounterState } from './counter.state';
 
export const initialState: CounterState = {
  count: 0
}
 
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => { 
    state.count++;
    return state
  }),
  on(decrement, (state) => { 
     state.count--;
     return state;
  }),
  on(reset, (state ) => {
    state.count = initialState.count;
    return state
  }),
);
 
// export function counterReducer(state:any, action: any) {
//   return _counterReducer(state, action);
// }
