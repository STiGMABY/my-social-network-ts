import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {
    DefaultStateType,
    followUser,
    setUsersFromApi,
    SocialNetAPIUsersType,
    unfollowUser
} from "../../redux/reducers/users-reducer";
import axios from 'axios'


export const UsersList = () => {
    //1 откуда вытягиваем
    //2 что вытягиваем
    const users = useSelector<AppStateType, Array<SocialNetAPIUsersType>>(state => state.usersPageReducer.users)
    const dispatch = useDispatch()

    const followUserFunc = (userId: number) => {
        dispatch(followUser(userId))
    }

    const unfollowUserFunc = (userId: number) => {
        dispatch(unfollowUser(userId))
    }

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( response => {
                dispatch(setUsersFromApi(response.data.items))
            })
    }, [dispatch])

    return (

        <div>
            <h1>UserList:</h1>
            <hr/>
            <div>
                {
                    users.map((u ) => {
                        debugger
                        return <div key={u.id}>
                            {u.name}
                            {u.followed
                                ? <button onClick={() => unfollowUserFunc(u.id)}>Unfollow</button>
                                : <button onClick={() => followUserFunc(u.id)}>Follow</button>}
                        </div>
                    })
                }
            </div>
        </div>
    )
}