const ADD_MAIN_PAGE_POST = 'ADD_MAIN_PAGE_POST'
const DELETE_MAIN_PAGE_POST = 'DELETE_MAIN_PAGE_POST'
const SET_USER_PROFILE_FROM_API = 'SET_USER_PROFILE_FROM_API'

type MainPageActionTypes =
    AddMainPagePostType |
    DeleteMainPagePostType |
    SetUserProfileFromApi

type AddMainPagePostType = {
    type: typeof ADD_MAIN_PAGE_POST,
    newPost: string
}

type DeleteMainPagePostType = {
    type: typeof DELETE_MAIN_PAGE_POST,
    payload: string
}

type SetUserProfileFromApi = {
    type: typeof SET_USER_PROFILE_FROM_API,
    userProfile: UserProfileType
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type FakeChatMessageType = {
    id: number,
    message: string,
    likesCount: number
}

type DefaultMainPageState = {
    fakeChatMessages: Array<FakeChatMessageType>
    userProfile: null | UserProfileType
}

export const defaultMainPageState = {
    fakeChatMessages: [
        {id: 1, message: 'HTML', likesCount: 3},
        {id: 2, message: 'CSS', likesCount: 5},
        {id: 3, message: 'React', likesCount: 3},
        {id: 4, message: 'Have a nice day', likesCount: 9},
        {id: 5, message: 'Lern hard!', likesCount: 6}
    ],
    userProfile: null
}

export const mainPageReducer = (state: DefaultMainPageState = defaultMainPageState, action: MainPageActionTypes): DefaultMainPageState => {
    switch (action.type) {
        case "ADD_MAIN_PAGE_POST":
            return {...state}
        case SET_USER_PROFILE_FROM_API:
            return {...state, userProfile: action.userProfile}
        default:
            return state
    }
}

export const addMainPagePost = (newPost: string): AddMainPagePostType => ({
    type: ADD_MAIN_PAGE_POST,
    newPost
})
export const setUsersProfileFromApi = (userProfile: UserProfileType): SetUserProfileFromApi => ({
    type: SET_USER_PROFILE_FROM_API,
    userProfile
})