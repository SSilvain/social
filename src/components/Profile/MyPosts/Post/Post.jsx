import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>{props.text}</div>
            <div className={s.like}>{props.likeCount}</div>
        </div>
    )
}

export default Post;