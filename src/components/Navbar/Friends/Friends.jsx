import React from "react";
import s from "./Friends.module.css"

const Friends = (props) => {
    return (
        <div className={s.friend}>
            {props.name}
        </div>
    )
}

export default Friends;