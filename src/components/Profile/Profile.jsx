import React from "react";
import Information from "./Information/Information";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <Information />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;