import React, { useState } from "react";
import Helmet from "react-helmet";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import PagesRenderArray from "./PagesRenderArray/PagesRenderArray";


let Users = (props) => {
    let TITLE = "Users Page";
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   
    return (<div>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        {/*<button onClick={getUsers}>GetUsers</button>*/}
        <div>
            <PagesRenderArray currentPage={props.currentPage} onPageChanged={props.onPageChanged} pagesCount={pagesCount} />
        </div>
        {props.users.map(u =>
        (<div key={u.id} className={s.flexBox}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={
                            u.photos.small
                                ? u.photos.small
                                : userPhoto
                        } alt="ava" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>
                            unfollow
                        </button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>
                            Follow
                        </button>}
                </div>
            </span>
            <span className={s.flexBox}>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>))
        }
    </div>
    )
}

export default Users;