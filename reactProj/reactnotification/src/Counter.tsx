import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store/counter.reducer";
import store from "./store/counter.store";

export const Counter = () => {
    
    //STORE
    const count = useSelector((state:any)=>state.counter.count)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h2> Counter: {count} </h2>
                <button onClick={ ()=> dispatch(increment()) }>Increase</button>
                <button onClick={ () => dispatch(decrement()) }>Decrease</button>
                <button onClick={ () => dispatch(reset()) }>Reset</button>
            </div>
        </div>
        
      );
};