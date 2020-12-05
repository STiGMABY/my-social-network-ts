import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {followUser, unfollowUser, UsersType} from "../../redux/reducers/users-reducer";



export const UsersList = () => {
    //1 типизируем стор, чего вытягиваем
    //2 что вытягиваем
    const users = useSelector<AppStateType, Array<UsersType>>(state => state.usersPageReducer.users)
    const dispatch = useDispatch()

    const followUserFunc = (userId: number) => {
        dispatch(followUser(userId))
    }

    const unfollowUserFunc = (userId: number) => {
        dispatch(unfollowUser(userId))
    }

    return (

        <div>
            <h1>UserList:</h1>
            <div>
                {
                    users.map((u) => {
                        return <div key={u.id}>
                            {u.name}
                            {u.follow
                                ? <button onClick={()=> unfollowUserFunc(u.id)}>Unfollow</button>
                                : <button onClick={()=> followUserFunc(u.id)}>Follow</button>}
                        </div>
                    })
                }
            </div>
        </div>
    )
}