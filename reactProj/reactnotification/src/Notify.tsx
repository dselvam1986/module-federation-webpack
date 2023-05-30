import React,  { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import store from "./store/counter.store";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store/counter.reducer";


interface CounterProps {
    message: string;
    counterObservable:BehaviorSubject<number>;
    messageSubject: BehaviorSubject<number>;
}

export const Notify:React.FC<CounterProps> = ({ message, counterObservable, messageSubject }) => {

    // POPOVER
    const [showPopover, setShowPopover] =useState(false);
    const togglePopover = () => {
        setShowPopover(!showPopover);
    }
    
    const fireEvent = () =>{
        const event = new CustomEvent('reactBtnClick', {
            detail: {
                message: 'React-Ang event', 
                numClick: count
            }
        })
        window.dispatchEvent(event);
        
    }
    const triggerSubject = () =>{
        messageSubject.next(count);
        // console.log("React function triggered")
    }

    //STORE
    // const dispatch = useDispatch();
    // const [count, setCounter] = useSelector((state:any)=>state.counter.count)
    //Observable
    const [count, setCounter] = useState(0);

    useEffect(()=>{
        const subscription = counterObservable.subscribe( (c:number) => {
            setCounter(c)
        });

        return ()=>{
            subscription.unsubscribe();
        };
    }, [counterObservable])

    return (
        <div>
            <div>
                <h3> Angular - React connected via BehaviorSubject </h3>
               <span> Counter: { count }</span>
            </div>
            <hr></hr>
            <div>
                <h6> React - Angular Message using Events</h6>
                <button onClick={() => {fireEvent()}}>Fire Event </button>
                <hr></hr>
                <h6> React - Angular Message using Behaviour Subject</h6>
                <button onClick={() => {triggerSubject()}}>Trigger Subject Message </button>
            </div>
            <hr></hr>
            <div>
                <button onClick={togglePopover}>Open Popover</button>
                {showPopover && <div className="popover">{message}</div>}
            </div> 
            <hr></hr>
            
        </div>
        
      );
};


/**
 * 
 <div>
    <Provider store={store}>
        <Counter></Counter>
    </Provider>
</div>   
 */

