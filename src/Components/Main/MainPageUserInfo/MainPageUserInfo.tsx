import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserNewStatus, setUsersProfileFromApi, UserProfileType} from "../../../redux/reducers/main-page-reducer";
import {AppStateType} from "../../../redux/redux";
import {useParams} from "react-router";
import {MainPageUserInfoItem} from "./MainPageUserInfoItem/MainPageUserInfoItem";
import {mainPageAPI} from "../../../api/api";

type ParamType = {
    userId: string
}

export const MainPageUserInfo = (...props: any) => {

    //вытягиваем параметр из адресной строки
    let {userId} = useParams<ParamType>();

    const dispatch = useDispatch()
    const userProfile = useSelector<AppStateType, UserProfileType | null>(state => state.mainPageReducer.userProfile)

    useEffect(() => {
        if (!userId) {
            userId = '2'
        }
        mainPageAPI.getUserInfo(userId)
            .then(res => {
                //debugger
                dispatch(setUsersProfileFromApi(res.data))
            })
    }, [dispatch, userId])

    useEffect(() => {
        mainPageAPI.getUserInfo(userId)
            .then(res => {
                //debugger
                dispatch(setUserNewStatus(res.data.aboutMe))
            })
    }, [dispatch, userId])

    return (
        <div>
            <h1>User Info</h1>
            {userProfile && <MainPageUserInfoItem
                userProfile={userProfile}
            />}
        </div>
    )
}