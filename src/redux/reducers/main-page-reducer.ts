import {v1} from "uuid"

const ADD_MAIN_PAGE_POST = 'ADD_MAIN_PAGE_POST'
const DELETE_MAIN_PAGE_POST = 'DELETE_MAIN_PAGE_POST'

type MainPageActionTypes = AddMainPagePostType | DeleteMainPagePostType

type AddMainPagePostType = {
    type: 'ADD_MAIN_PAGE_POST',
    payload: string
}

type DeleteMainPagePostType = {
    type: 'DELETE_MAIN_PAGE_POST',
    payload: string
}

type DefaultMainPageState = {
    id: string
    post: string
    time: string
    likes: number
}

export const defaultMainPageState = [
    {
        id: v1(),
        post: 'Hello',
        time: '15:20 PM',
        likes: 0
    },
    {
        id: v1(),
        post: 'Guten tag!',
        time: '10:30 PM',
        likes: 0
    },
    {
        id: v1(),
        post: 'Aloha',
        time: '9:05 AM',
        likes: 0
    },

]

export const mainPageReducer = (state: Array<DefaultMainPageState> = defaultMainPageState, action: MainPageActionTypes) => {
    switch (action.type) {
        case "ADD_MAIN_PAGE_POST":
            return {
                ...state, id: v1(), post: action.payload, time: new Date(), likes: 0
            }
        default:
            return state
    }
}

export const addMainPagePost = (payload: string) => ({
    type: ADD_MAIN_PAGE_POST,
    payload
})