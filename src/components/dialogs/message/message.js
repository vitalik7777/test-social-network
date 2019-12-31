import React from "react";

const Message = (props) => {
    return (
        <div className='message-item'>
            {props.message}
        </div>
    )
};

export  default  Message;