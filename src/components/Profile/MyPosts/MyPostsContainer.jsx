// import React from "react"
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }
//                     return (
//                         <MyPosts
//                             posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                             addPost={addPost}
//                             updateNewPostText={onPostChange}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;