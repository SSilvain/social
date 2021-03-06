import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    let dialogsRender = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesRender = props.dialogsPage.messages.map(m =><Messages message={m.message} />)


    let onNewMessageChange = (e) => {

        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    return (
        <div className={s.dialogsWrapper}>
            <h2 className={s.title}>Dialogs</h2>
            <div className={s.dialogs}>
                <div>
                    {dialogsRender}
                </div>
                <div className={s.messagesWrapper}>
                    {messagesRender}
                </div>
            </div>

            <textarea
                value={props.dialogsPage.newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter New Massage"
            />
            <button onClick={onSendMessageClick}>Send</button>
        </div>
    );
}

export default Dialogs;

