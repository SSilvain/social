import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {Helmet} from "react-helmet";


const MyPosts = (props) => {
    let postsRender = props.posts.map(p => {
        return (
            <Post likeCount={p.like} text={p.text} key={p.id.toString()}/>
        )
    });
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    
    let onPostChange = () => {
        let textTmp = newPostElement.current.value;
        props.updateNewPostText(textTmp);
    }
    let TITLE = "Title Post Page";
    return (
        <div className={s.wrapper}>
            <Helmet>
                <title>{ TITLE }</title> 
            </Helmet>

            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder={"hello"}
                    />
                </div>
                <button onClick={onAddPost}>New post</button>
                {/* <button>Remove</button> */}
            </div>
            <div className={s.posts}>
                {postsRender}
            </div>
        </div>
    )
}

export default MyPosts;