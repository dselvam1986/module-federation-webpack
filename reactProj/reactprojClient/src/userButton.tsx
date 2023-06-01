import React,  { useState } from "react";
  
export const UserButton = () => {
    // const [count, setCount] = useState(0);
  const fireEvent = () =>{
    // const event = new CustomEvent('reactBtnClick', {
    //   detail: {message: 'React fired event to angular component', numClick: count}
    // })
    // window.dispatchEvent(event);
    console.log("React function triggered")
  }

    return (
        <div>
            <button onClick={() => {fireEvent()}}>Fire Event </button>
        </div>
      );
};