import React, {useEffect} from "react";
import s from './UsersList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {
    changeCurrenUserstPage,
    getTotalUsersCountFromApi,
    isFetchingUsers,
    setUsersFromApi,
    SocialNetAPIUsersType
} from "../../redux/reducers/users-reducer";
import {UserListItem} from "./UserListItem/UserListItem";
import preloader from '../../images/blueCat.gif'
import {getUsersDAL} from "../../api/api";


export const UsersList = () => {
    //1 откуда вытягиваем
    //2 что вытягиваем
    const users = useSelector<AppStateType, Array<SocialNetAPIUsersType>>(state => state.usersPageReducer.users)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPageReducer.totalUsersCount)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPageReducer.pageSize)
    const currantPage = useSelector<AppStateType, number>(state => state.usersPageReducer.currentPage)
    const isFetching = useSelector<AppStateType, boolean>(state => state.usersPageReducer.isFetching)
    const isFollowingInProgress = useSelector<AppStateType, boolean>(state => state.usersPageReducer.followingInProgress)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isFetchingUsers(true))
        getUsersDAL(currantPage, pageSize)
            .then(response => {
                //debugger
                dispatch(isFetchingUsers(false))
                dispatch(setUsersFromApi(response.items))
                dispatch(getTotalUsersCountFromApi(response.totalCount = 17))
            })
    }, [currantPage, pageSize, dispatch])

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
    //console.log(currantPage)
    return (
        <div>
            <h1>UserList:</h1>
            <hr/>
            <div>
                {
                    pages.map(page => {
                        return <span
                            key={page}
                            onClick={(event) => changeUsersPage(page)}
                            className={currantPage === page ? s.pagesToggle : ''}>{page}</span>
                    })
                }
            </div>
            <div>
                {
                    isFetching
                        ? <div className={s.preloader}>
                            <img src={preloader} alt={''}/>
                        </div>
                        : users.map(u => {
                            return <UserListItem
                                key={u.id}
                                id={u.id}
                                name={u.name}
                                followed={u.followed}
                                status={u.status}
                                photos={u.photos}
                                isFollowingInProgress={isFollowingInProgress}
                            />
                        })
                }
            </div>
        </div>
    )
}