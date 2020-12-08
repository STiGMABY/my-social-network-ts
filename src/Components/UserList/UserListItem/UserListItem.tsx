import React from "react";
import s from './UserListItem.module.css'
import {followUser, unfollowUser} from "../../../redux/reducers/users-reducer";
import {useDispatch} from "react-redux";
import avaAnonymous from '../../../common/images/avaAnonymous.jpg'
import {NavLink} from "react-router-dom";

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
                    ? <button onClick={() => unfollowUserFunc(id)}>Unfollow</button>
                    : <button onClick={() => followUserFunc(id)}>Follow</button>}</div>
            </div>
            <div className={s.userInfoWrapper}>
                <div className={s.name}>{name}</div>
                <div>{status !== null ? status : <span>Double click and set your status</span>}</div>
            </div>
        </div>
    )
}