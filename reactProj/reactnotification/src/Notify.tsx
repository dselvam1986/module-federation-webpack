import React,  { useState } from "react";
  
interface NotificationProps {
    message: string;
}

export const Notify: React.FC<NotificationProps> = ({message}) => {

    const [showPopover, setShowPopover] =useState(false);

    const togglePopover = () => {
        setShowPopover(!showPopover);
    }

  const fireEvent = () =>{
    // const event = new CustomEvent('reactBtnClick', {
    //   detail: {message: 'React fired event to angular component', numClick: count}
    // })
    // window.dispatchEvent(event);
    console.log("React function triggered")
  }

    return (
        <div>
            <div>
                <button onClick={() => {fireEvent()}}>Fire Event </button>
            </div>
            <div>
                <button onClick={togglePopover}>Open Popover</button>
                {showPopover && <div className="popover">{message}</div>}
            </div>    
        </div>
        
      );
};