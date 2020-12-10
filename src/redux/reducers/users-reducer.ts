const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_USERS_PAGE = 'CHANGE_CURRENT_USERS_PAGE'
const GET_TOTAL_USERS_COUNT_FROM_API = 'GET_TOTAL_USERS_COUNT_FROM_API'
const IS_FETCHING = 'IS_FETCHING'

//------------------ SocialNetAPIUsersType
export type SocialNetAPIUsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}//-------------------

//------------------- ACTIONS TYPES
type FollowUserType = ({
    type: typeof FOLLOW,
    userId: number
})

type UnfollowUserType = ({
    type: typeof UNFOLLOW,
    userId: number
})
type SetUsersFromAPIType = ({
    type: typeof SET_USERS,
    users: Array<SocialNetAPIUsersType>
})
type ChangeCurrentUserPageType = {
    type: typeof CHANGE_CURRENT_USERS_PAGE,
    currentPage: number
}

type GetTotalUsersCountFromApi = {
    type: typeof GET_TOTAL_USERS_COUNT_FROM_API,
    totalUsersCount: number
}
type IsFetchingType = {
    type: typeof IS_FETCHING,
    isFetching: boolean
}//-------------------

type UsersReducerActionsType =
    FollowUserType |
    UnfollowUserType |
    SetUsersFromAPIType |
    ChangeCurrentUserPageType |
    GetTotalUsersCountFromApi |
    IsFetchingType

export type DefaultStateType = {
    users: Array<SocialNetAPIUsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean
}

const defaultState = {
    users: [] as Array<SocialNetAPIUsersType>,
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 1,
    isFetching: false
}
export const usersPageReducer = (state: DefaultStateType = defaultState, action: UsersReducerActionsType): DefaultStateType => {
    switch (action.type) {
        case FOLLOW:
            //debugger
            return {
                ...state,
                users: state.users.map((u): SocialNetAPIUsersType => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }

                })
            }
        case UNFOLLOW:
            //debugger
            return {
                ...state,
                users: state.users.map((u): SocialNetAPIUsersType => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }

                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case CHANGE_CURRENT_USERS_PAGE:
            return {...state, currentPage: action.currentPage}
        case GET_TOTAL_USERS_COUNT_FROM_API: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }
}

export const followUser = (userId: number): FollowUserType => ({type: FOLLOW, userId})
export const unfollowUser = (userId: number): UnfollowUserType => ({type: UNFOLLOW, userId})
export const setUsersFromApi = (users: Array<SocialNetAPIUsersType>): SetUsersFromAPIType => ({type: SET_USERS, users})
export const getTotalUsersCountFromApi = (totalUsersCount: number): GetTotalUsersCountFromApi => ({
    type: GET_TOTAL_USERS_COUNT_FROM_API,
    totalUsersCount
})
export const changeCurrenUserstPage = (currentPage: number): ChangeCurrentUserPageType => ({
    type: CHANGE_CURRENT_USERS_PAGE,
    currentPage
})
export const isFetchingUsers = (isFetching: boolean): IsFetchingType => ({type: IS_FETCHING, isFetching})