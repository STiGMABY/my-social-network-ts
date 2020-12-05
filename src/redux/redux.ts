import {combineReducers, createStore, Store} from "redux";
import {mainPageReducer} from "./reducers/main-page-reducer";
import {usersPageReducer} from "./reducers/users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    mainPageReducer,
    usersPageReducer
    })

export let store: Store = createStore(rootReducer)

