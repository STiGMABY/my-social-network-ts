import React, {useEffect} from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {authUserOnApi} from "../../redux/reducers/auth-reducer";
import {authUserDAL} from "../../api/api";

export const Header = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        authUserDAL()
            .then(res => {
                //debugger
                const {id, login, email} = res.data.data
                //debugger
                if (res.data.resultCode === 0) {
                    dispatch(authUserOnApi(id, login, email))
                }
            })
    })

    return (
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