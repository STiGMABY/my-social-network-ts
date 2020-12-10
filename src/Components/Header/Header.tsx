import React, {useEffect} from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {authUserOnApi, DefaultAuthReducerType} from "../../redux/reducers/auth-reducer";

const settings = {
    withCredentials: true
}

export const Header = () => {

    //const authUser = useSelector<AppStateType, DefaultAuthReducerType>(state => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', settings)
            .then(res => {
                const {id, login, email} = res.data.data
                debugger
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