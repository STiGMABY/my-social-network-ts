import React, {useState} from "react";
import {UserProfileType} from "../../../../redux/reducers/main-page-reducer";

type PropsType = {
    userProfile: UserProfileType
}

export const MainPageUserInfoItem = (props: PropsType) => {

    // const {} = props
    const [editMode, setEditMode] = useState(false)

    const startEditStatus = () => {
        setEditMode(true)
    }

    const endEditStatus = () => {
        setEditMode(false)
    }

    const showLargePhoto = () => {

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
                            <input type="text" onBlur={endEditStatus} autoFocus={true}/>
                        </div>
                        : <div>
                            <span onDoubleClick={startEditStatus}>Your status is here: {props.userProfile.aboutMe}</span>
                        </div>
                }
            </div>
            {/*<div className={s.userInfoWrapper}>*/}
            {/*    <div className={s.name}>{name}</div>*/}
            {/*    <div>{status !== null ? status : <span>Double click and set your status</span>}</div>*/}
            {/*</div>*/}
        </div>
    )
}