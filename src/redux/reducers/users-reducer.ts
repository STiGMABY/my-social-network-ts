const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
}) //-------------------

type UsersReducerActionsType = FollowUserType | UnfollowUserType | SetUsersFromAPIType

export type DefaultStateType = {
    users: Array<SocialNetAPIUsersType>
}

const defaultState = {
    users: []
}
export const usersPageReducer = (state: DefaultStateType = defaultState, action: UsersReducerActionsType): DefaultStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u): SocialNetAPIUsersType => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    } else {
                        return u
                    }

                })
            }
        case UNFOLLOW:
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
        default:
            return state

    }
}

export const followUser = (userId: number): FollowUserType => ({type: FOLLOW, userId})
export const unfollowUser = (userId: number): UnfollowUserType => ({type: UNFOLLOW, userId})
export const setUsersFromApi = (users: Array<SocialNetAPIUsersType>): SetUsersFromAPIType => ({type: SET_USERS, users})