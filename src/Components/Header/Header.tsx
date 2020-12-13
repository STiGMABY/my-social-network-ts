import React, {useEffect} from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {authUserOnApi} from "../../redux/reducers/auth-reducer";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux";

export const Header = () => {

    const isAuthValue = useSelector<AppStateType, boolean>(state => state.authReducer.userData.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        usersAPI.authUserDAL()
            .then(res => {
                //debugger
                const {id, login, email} = res.data.data
                //debugger
                if (res.data.resultCode === 0) {
                    dispatch(authUserOnApi(id, login, email, true))
                }
            })
    })

    return (
        <div className={s.header}>
            <div className={s.navWrapper}>
                <nav className={s.nav}>
                    {
                        isAuthValue
                            ? <div>
                                <NavLink to={'/logout'}>
                                    <button>Logout</button>
                                </NavLink>
                            </div>
                            : <div>
                                <NavLink to={'/login'}>Login</NavLink>
                                <NavLink to={'/registration'}>Registration</NavLink>
                            </div>
                    }
                </nav>
            </div>
        </div>
    )
}