import React, {ChangeEvent, useState} from "react";
import {setUserNewStatus, UserProfileType} from "../../../../redux/reducers/main-page-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux";

type PropsType = {
    userProfile: UserProfileType
}

export const MainPageUserInfoItem = (props: PropsType) => {
    const userLocalStatus = useSelector<AppStateType, string>(state => state.mainPageReducer.userStatus)

    const dispatch = useDispatch()

    // const {} = props
    const [editMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(userLocalStatus)

    const startEditStatus = () => {
        setEditMode(true)
    }

    const endEditStatus = () => {
        setEditMode(false)
        dispatch(setUserNewStatus(userStatus))
    }

    const showLargePhoto = () => {

    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserStatus(e.target.value)
        console.log(userStatus)
    }

    return (
        <div>
            <div>
                {
                    <img onClick={showLargePhoto} src={props.userProfile.photos.small} alt=""/>
                }
            </div>
            <div>
                {props.userProfile.fullName}
            </div>
            <div>
                {
                    editMode
                        ? <div>
                            <input
                                value={userStatus}
                                type="text"
                                onBlur={endEditStatus}
                                autoFocus={true}
                                onChange={onStatusChange}
                            />
                        </div>
                        : <div>
                            <span onDoubleClick={startEditStatus}>Your status is here: {userLocalStatus}</span>
                        </div>
                }
            </div>
        </div>
    )
}