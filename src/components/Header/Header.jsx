import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://logomaster.ai/static/media/sample.c8bf2b04.svg" alt="" />
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={"/login"}>Login</NavLink >}
            </div>
        </header>
    )
}

export default Header;