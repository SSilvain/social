import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "Dialog" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;

