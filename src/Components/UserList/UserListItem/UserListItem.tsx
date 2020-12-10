import React, {useEffect} from "react";
import s from './UserListItem.module.css'
import {followUser, unfollowUser} from "../../../redux/reducers/users-reducer";
import {useDispatch} from "react-redux";
import avaAnonymous from '../../../common/images/avaAnonymous.jpg'
import {NavLink} from "react-router-dom";
import axios from 'axios'

type PropsType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export const UserListItem = (props: PropsType) => {
    const {id, name, photos, followed, status} = props

    const dispatch = useDispatch()

    const followUserFunc = (userId: number) => {
        dispatch(followUser(userId))
    }

    const unfollowUserFunc = (userId: number) => {
        dispatch(unfollowUser(userId))
    }

    return (
        <div className={s.userListItemWrapper}>
            <div>
                <div className={s.photo}>
                    <NavLink to={`/main-page/${id}`}>
                        <img src={photos.small !== null ? photos.small : avaAnonymous} alt="Avatar"/>
                    </NavLink>
                </div>
                <div>{followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                            withCredentials: true,
                            headers: {
                                "api-key": "1395fcf2-9369-4c85-86f6-e7d2933a85b4"
                            }
                        })
                            .then(res => {
                                debugger
                                if (res.data.resultCode === 0) {
                                    unfollowUserFunc(id)
                                }
                            })
                    }
                    }>Unfollow</button>

                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "api-key": "1395fcf2-9369-4c85-86f6-e7d2933a85b4"
                            }
                        })
                            .then(res => {
                                if (res.data.resultCode === 0) {
                                    followUserFunc(id)
                                }
                            })
                    }}>Follow</button>}</div>
            </div>
            <div className={s.userInfoWrapper}>
                <div className={s.name}>{name}</div>
                <div>{status !== null ? status : <span>Double click and set your status</span>}</div>
            </div>
        </div>
    )
}