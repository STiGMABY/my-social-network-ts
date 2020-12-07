import React, {useEffect} from "react";
import s from './UsersList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {
    changeCurrenUserstPage,
    getTotalUsersCountFromApi,
    setUsersFromApi,
    SocialNetAPIUsersType
} from "../../redux/reducers/users-reducer";
import axios from 'axios'
import {UserListItem} from "./UserListItem/UserListItem";


export const UsersList = () => {
    //1 откуда вытягиваем
    //2 что вытягиваем
    const users = useSelector<AppStateType, Array<SocialNetAPIUsersType>>(state => state.usersPageReducer.users)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPageReducer.totalUsersCount)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPageReducer.pageSize)
    const currantPage = useSelector<AppStateType, number>(state => state.usersPageReducer.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currantPage}&count=${pageSize}`)
            .then(response => {
                //debugger
                dispatch(setUsersFromApi(response.data.items))
                dispatch(getTotalUsersCountFromApi(response.data.totalCount = 17))
            })
    }, [currantPage])

    const changeUsersPage = (page: number) => {
        dispatch(changeCurrenUserstPage(page))
    }

    //находим общее количество страниц
    let numberOfPages = Math.ceil(totalUsersCount / pageSize)

    //пушим в массив найденное количество сраниц
    let pages = []
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }
    console.log(currantPage)
    return (
        <div>
            <h1>UserList:</h1>
            <hr/>
            <div>
                {
                    pages.map(page => {
                        return <span
                            onClick={(event) => changeUsersPage(page)}
                            className={currantPage === page ? s.pagesToggle : ''}>{page}</span>
                    })
                }
            </div>
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