import React, {useEffect} from "react";
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setUsersProfileFromApi, UserProfileType} from "../../../redux/reducers/main-page-reducer";
import {AppStateType} from "../../../redux/redux";

export const MainPageUserInfo = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector<AppStateType, UserProfileType | null>(state => state.mainPageReducer.userProfile)

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(res => {
                //debugger
                dispatch(setUsersProfileFromApi(res.data))
            })
    }, [dispatch])

    let userPhoto = userProfile?.photos.large

    return (
        <div>
            <h1>User Info</h1>
            <div>
                {
                    <img src={userPhoto} alt=""/>
                }
            </div>
        </div>
    )
}