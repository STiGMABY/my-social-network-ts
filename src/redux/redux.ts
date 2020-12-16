import {combineReducers, createStore, Store} from "redux";
import {mainPageReducer} from "./reducers/main-page-reducer";
import {usersPageReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import { reducer as formReducer } from 'redux-form'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    mainPageReducer,
    usersPageReducer,
    authReducer,
    form: formReducer
    })

export let store: Store = createStore(rootReducer)

// @ts-ignore
window.store = store

