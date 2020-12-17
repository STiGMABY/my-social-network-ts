import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <NavLink to={'/main-page'}>Main page</NavLink>
                <NavLink to={'/users-list'}>Users List</NavLink>
            </nav>
        </div>
    )
}