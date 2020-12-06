import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {setUsersFromApi, SocialNetAPIUsersType} from "../../redux/reducers/users-reducer";
import axios from 'axios'
import {UserListItem} from "./UserListItem/UserListItem";


export const UsersList = () => {
    //1 откуда вытягиваем
    //2 что вытягиваем
    const users = useSelector<AppStateType, Array<SocialNetAPIUsersType>>(state => state.usersPageReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                dispatch(setUsersFromApi(response.data.items))
            })
    }, [dispatch])

    return (

        <div>
            <h1>UserList:</h1>
            <hr/>
            <div>
                {
                    users.map(u => {
                        return <UserListItem
                            key={u.id}
                            id={u.id}
                            name={u.name}
                            followed={u.followed}
                            status={u.status}
                            photos={u.photos}
                        />
                    })
                }
            </div>
        </div>
    )
}