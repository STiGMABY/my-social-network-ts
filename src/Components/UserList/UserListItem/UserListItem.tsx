import React from "react";
import s from './UserListItem.module.css'
import {fetchingFollowingInProgress, followUser, unfollowUser} from "../../../redux/reducers/users-reducer";
import {useDispatch} from "react-redux";
import avaAnonymous from '../../../common/images/avaAnonymous.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

type PropsType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    isFollowingInProgress: Array<number>
}

export const UserListItem = (props: PropsType) => {

    const {id, name, photos, followed, status, isFollowingInProgress} = props

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
                    ? <button
                        disabled={isFollowingInProgress.some(userId => userId === id)}
                        onClick={() => {
                            dispatch(fetchingFollowingInProgress(id, true))
                            usersAPI.unfollowUserDAL(id)
                                .then(res => {
                                    //debugger
                                    if (res.data.resultCode === 0) {
                                        unfollowUserFunc(id)
                                        dispatch(fetchingFollowingInProgress(id, false))
                                    }
                                })
                        }
                        }>Unfollow</button>

                    : <button
                        disabled={isFollowingInProgress.some(userId => userId === id)}
                        onClick={() => {
                            dispatch(fetchingFollowingInProgress(id, true))
                            usersAPI.followUserDAL(id)
                                .then(res => {
                                    if (res.data.resultCode === 0) {
                                        followUserFunc(id)
                                        dispatch(fetchingFollowingInProgress(id, false))
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