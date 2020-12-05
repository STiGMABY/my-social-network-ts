import React from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return(
        <div className={s.header}>
            <div className={s.navWrapper}>
                <nav className={s.nav}>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/logout'}>Logout</NavLink>
                    <NavLink to={'/registration'}>Registration</NavLink>
                </nav>
            </div>
        </div>
    )
}