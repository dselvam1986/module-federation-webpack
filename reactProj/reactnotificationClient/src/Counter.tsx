import { useDispatch, useSelector,  } from "react-redux";
import { increment, decrement, reset, setCount, getStateValue, getValue } from "./store/counter.reducer";
import {ThunkDispatch} from "@reduxjs/toolkit";
import React, {useEffect} from 'react';
import { BehaviorSubject } from "rxjs";
import './Counter.css';

interface prop {
    store: BehaviorSubject<number>;
    counterSubject: BehaviorSubject<number>;
}
export const Counter:React.FC<prop> = ({store, counterSubject}) => {
    
    //STORE
    const count = useSelector((state:any)=> (state.counter.count))
    const dispatch = useDispatch<ThunkDispatch<any,any,any>>();

    const updateHost = (type: string) =>{
    
        dispatch(getStateValue()).then((action:any) => {
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

    /************************************************************************************ */
    // //STORE
    // const dispatch = useDispatch();
    // const [count, setCounter] = useSelector((state:any)=>state.counter.count)
    // // Observable
    // const [count, setCounter] = useState(0);

    // const triggerSubject = () =>{
    //     counterSubject.next(count);
    // }

    const fireEvent = () =>{
        const event = new CustomEvent('reactBtnClick', {
            detail: {
                message: 'React-MFE (State) - Event', 
                value: count
            }
        })
        window.dispatchEvent(event);
        
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
            <div>
                <div className="padding">
                    <h6> Communication </h6>
                    <button className="huntington-button" onClick={() => {fireEvent()}}>Send State By Windows Event </button>
                </div>
            </div>
        </div>
        
      );
};