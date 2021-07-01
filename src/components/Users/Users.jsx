import React from "react";
import Helmet from "react-helmet";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let TITLE = "Users Page";
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesRenderArray = pages.map(p => {
        return <span onClick={(e) => {
            props.onPageChanged(p)
        }} key={p}
            className={props.currentPage === p && s.selectedPage}>{p} </span>
    });

    return (<div>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        {/*<button onClick={getUsers}>GetUsers</button>*/}
        <div>
            {pagesRenderArray}
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