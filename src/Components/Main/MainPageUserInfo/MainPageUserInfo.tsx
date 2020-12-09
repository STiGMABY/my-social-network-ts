import React, {useEffect} from "react";
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setUsersProfileFromApi, UserProfileType} from "../../../redux/reducers/main-page-reducer";
import {AppStateType} from "../../../redux/redux";
import {useParams} from "react-router";

type ParamType = {
    userId: string
}

export const MainPageUserInfo = (...props: any) => {

    //вытягиваем параметр из адресной строки
    let {userId} = useParams<ParamType>();

    const dispatch = useDispatch()
    const userProfile = useSelector<AppStateType, UserProfileType | null>(state => state.mainPageReducer.userProfile)

    useEffect(() => {
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                //debugger
                dispatch(setUsersProfileFromApi(res.data))
            })
    }, [dispatch, userId])

    let userPhoto = userProfile?.photos.large

    return (
        <div>
            <h1>User Info</h1>
            <div>
                {
                    <img src={userPhoto} alt=""/>
                }
            </div>
            <div>
                {
                    userProfile?.fullName
                }
            </div>
        </div>
    )
}