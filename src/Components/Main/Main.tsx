import React from "react";
import s from './Main.module.css'
import {MainPageUserInfo} from "./MainPageUserInfo/MainPageUserInfo";
import {MainPageUserChat} from "./MainPageUserChat/MainPageUserChat";

export const Main:React.FC = () => {
    return (
        <div className={s.main}>
            <MainPageUserInfo /><hr/>
            <MainPageUserChat />
        </div>
    )
}