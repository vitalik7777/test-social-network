import React from 'react';
import  Message from './message/message';
import  DialogItem from './dialog-item/dialog-item';
import './dialogs.css';

const Dialogs = (props) => {
    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    };
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {props.dialogsPage.dialogsData.map(dialog => (
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
                ))}
            </div>
            <div className='messages'>
                {props.dialogsPage.messagesData.map(message => (
                    <Message key={message.id} message={message.message} id={message.id}/>
                ))}
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;