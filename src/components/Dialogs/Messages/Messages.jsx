import React from 'react';
import s from "./Messages.module.css";

const Messages = (props) => {

    return (
        <div className={s.messeges}>
            <div className={s.massage} > {props.message}</div>
        </div>
    );
}

export default Messages;

