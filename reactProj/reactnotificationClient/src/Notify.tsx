import React,  { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import './Notify.css';
import { Provider } from "react-redux";
import { Counter } from "./Counter";
import { store } from './store/counter.store'


interface CounterProps {
    message: string;
    store$:BehaviorSubject<number>;
    counterSubject: BehaviorSubject<number>;
    messageHostSubject: BehaviorSubject<string>;
    messageClient$: BehaviorSubject<string>;
}

interface msgEvent {
    detail: {
        message: string,
        value: string
    }
}

export const Notify:React.FC<CounterProps> = ({ message,  store$, counterSubject, messageHostSubject, messageClient$ }) => {

    // POPOVER
    // const [showPopover, setShowPopover] =useState(false);
    // const togglePopover = () => {
    //     setShowPopover(!showPopover);
    // }

    
    // const initialState= {
    //     count: 0
    // }

    // const counterSlice = createSlice({
    //     name: 'counter', 
    //     initialState, 
    //     reducers: {
    //         increment: (state) => ({...state, count: state.count + 1, }),
    //         decrement: (state) => ({...state, count: state.count - 1}),
    //         reset: (state) => ({...state, count: initialState.count }),
            
    //     }
    // });

    // const store = configureStore({
    //     reducer: {
    //         counter: counterSlice.reducer
    //     }
    // });
 
    // const { increment, decrement, reset, setCount} = counterSlice.actions;

    const [messageArray, setMessageArray] = useState(['']);
    const deleteMessage = (index: number) => {
        setMessageArray([...messageArray.slice(0,index), ...messageArray.slice(index+1, messageArray.length)]);
    }
    

    /************************************************************************************ */
    /**
     * 
     */
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e:any) =>{
        setInputValue(e.target.value);
    }

    //send communication - event
    const fireMessageEvent = () =>{
        const event = new CustomEvent('reactBtnClick', {
            detail: {
                message: 'React-MFE - Event', 
                value: inputValue
            }
        })
        window.dispatchEvent(event);
        
    }

    //send communication - subject
    const triggerMessageSubject = () =>{
        if(inputValue !== '') messageHostSubject.next(inputValue);
    }
    /************************************************************************************ */
    //STORE
    // const dispatch = useDispatch();
    // const [count, setCounter] = useSelector((state:any)=>state.counter.count)
    //Observable
    const [count, setCounter] = useState(0);

    const triggerSubject = () =>{
        counterSubject.next(count);
        // console.log("React function triggered")
    }

    const fireEvent = () =>{
        const event = new CustomEvent('reactBtnClick', {
            detail: {
                message: 'React-MFE (State) - Event', 
                value: count
            }
        })
        window.dispatchEvent(event);
        
    }
    /************************************************************************************ */
    useEffect(()=>{

        const subscription =  store$.subscribe( (c:number) => {
            setCounter(c);
        });

        const handleHostMessageEvent = (msgEvent:any) =>{
            // console.log('react host ',msgEvent);
            
            if(msgEvent && msgEvent instanceof Object){
                const { message, value} = msgEvent ? msgEvent.detail : ''
                const concatString = `${message} - ${value}`;
        
                setMessageArray(messageArray => [...messageArray, concatString]);
            }
        }
        window.addEventListener('hostMessage', handleHostMessageEvent );


        const handleHostMessageSubject = (msgSubject:any) => {

            const concatString = `${'Host-MFE - Subject'} - ${msgSubject}`;
            
            setMessageArray(messageArray => [...messageArray, concatString]);
        }
        const msgSubscription = messageClient$.subscribe( (c) => {
            
            if(c) handleHostMessageSubject(c)
        });

        return ()=>{
            subscription.unsubscribe();
            msgSubscription.unsubscribe();
            window.removeEventListener('window:hostMessage', handleHostMessageEvent );
        };
    }, [messageClient$, store$])

    return (
        <div className="container">
            <div className="header">
                <h4>React-MFE-App (React Microfrontend)</h4>
            </div>
            
            <div className="content">
                <div className="title">
                    <p> Logged in as: {message}</p>
                </div>
            </div>
            <div>
            <Provider store={store}>
                <Counter store={store$} counterSubject={counterSubject}></Counter>
            </Provider>
            </div>
            <div >
                <hr/>
                <h5>Shared state </h5>
                <span> Counter: { count }</span>
                <div className="padding">
                    <h6> Communication </h6>
                    <button className="huntington-button" onClick={() => {fireEvent()}}>Send State By Windows Event </button>
                    <button className="huntington-button" disabled onClick={() => {triggerSubject()}}>Send State by Subject</button>
                </div>
            </div>
            <hr></hr>
            <div>
                <h6> Messages</h6>
                <div className="huntingtonTextBox">
                    <label className="huntingtonTextBox-label"> Enter Message </label>
                    <input className="huntingtonTextBox-input" value={inputValue} onChange={handleInputChange} type="text"></input>
                </div>
                <div className="padding">
                    <button className="huntington-button" onClick={() => {fireMessageEvent()}}>Send Message By Windows Event </button>
                    <button className="huntington-button" onClick={() => {triggerMessageSubject()}}>Send Message by Subject</button>
                </div>
            </div>
            <hr></hr>
            {/* <div>
                <button className="{styles.huntington-button}" onClick={togglePopover}>Open Popover</button>
                {showPopover && <div className="popover">{message}</div>}
            </div> 
            <hr></hr> */}
            <div>
                <h5>Messages From host</h5>
                <ul>
                    {messageArray.map((message, index) => {
                        if(message !== ''){
                            return <li className="msgCard" onClick={() => deleteMessage(index)} key={index}>{message}</li>
                        }
                    })}
                    
                </ul>
            </div>
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

