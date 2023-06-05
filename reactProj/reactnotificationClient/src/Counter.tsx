import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, setCount, getValue, getStateValue } from "./store/counter.reducer";
// import store from "./store/counter.store";
import React, {useEffect} from 'react';
import { BehaviorSubject } from "rxjs";
import {Notify} from './Notify';
import './Counter.css';

interface prop {
    store: BehaviorSubject<number>;
    counterSubject: BehaviorSubject<number>;
}
export const Counter:React.FC<prop> = ({store, counterSubject}) => {
    
    //STORE
    const count = useSelector((state)=> (state.counter.count))
    const dispatch = useDispatch();

    const updateHost = (type: string) =>{
    
        dispatch(getStateValue()).then((action) => {
            // console.log('current val', action);
            counterSubject.next(action.payload);
        })

        // console.log(dispatch(getStateValue()));
        // counter.next(num);
        // switch(type) {
        //     case 'increase':
        //         counterSubject.next(count + 1);
        //         break;
        //     case 'decrease':
        //         counterSubject.next(count - 1);
        //         break;
        //     case 'reset':
        //         counterSubject.next(0);
        //         break;
        // }
        // console.log(count)
        // console.log("React function triggered")
    } 

    useEffect(()=>{
        const counterSubs = store.subscribe((value:number) => {
            dispatch(setCount(value));
        });

        return ()=>{
            counterSubs.unsubscribe();
        };
    },[dispatch, store])
    return (
        <div>
            <div>
                <h2> Counter: {count} </h2>
                <button className="huntington-button" onClick={ ()=> {dispatch(increment()); updateHost('increase')} }>Increase</button>
                <button className="huntington-button" onClick={ () => {dispatch(decrement()); updateHost('decrease')} }>Decrease</button>
                <button className="huntington-button" onClick={ () => {dispatch(reset()); updateHost('reset')} }>Reset</button>
            </div>
        </div>
        
      );
};