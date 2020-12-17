import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux";
import {addMainPagePost, FakeChatMessageType} from "../../../redux/reducers/main-page-reducer";
import s from './MainPageUserChat.module.css'

export const MainPageUserChat = () => {
    const dispatch = useDispatch()
    const fakeChatMessages = useSelector<AppStateType, Array<FakeChatMessageType>>(state => state.mainPageReducer.fakeChatMessages)

    const [message, setMessage] = useState('')

    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const addNewMessage = () =>{
        dispatch(addMainPagePost(message))
        setMessage('')
    }

    return (
        <div>
            <h1>User Chat</h1>
            <div>
                <textarea onChange={onTextAreaChange}/>
            </div>
            <div>
                <button value={message} onClick={addNewMessage}>Send message</button>
            </div>
            <div>
                {
                    fakeChatMessages.map(elem => {
                        return <div className={s.chatMessageWrapper}>
                            <div>{elem.message}</div>
                            <span>Likes: {elem.likesCount}</span>
                        </div>

                    })
                }
            </div>
        </div>
    )
}