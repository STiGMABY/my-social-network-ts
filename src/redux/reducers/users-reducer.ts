const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type FollowUserType = ({
    type: 'FOLLOW',
    userId: number
})

type UnfollowUserType = ({
    type: 'UNFOLLOW',
    userId: number
})

type UserReducerActionsType = FollowUserType | UnfollowUserType

export type DefaultStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number, follow: boolean, name: string, age: number
}

const defaultState = {
    users: [
        {id: 1, follow: false, name: 'Andrei', age: 35},
        {id: 2, follow: false, name: 'Vasia', age: 30},
        {id: 3, follow: false, name: 'Kolia', age: 16},
        {id: 4, follow: false, name: 'Gena', age: 40},
        {id: 5, follow: true, name: 'Ivan', age: 35}
    ]
}

export const usersPageReducer = (state: DefaultStateType = defaultState, action: UserReducerActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        default:
            return state

    }
}

export const followUser = (userId: number) => ({type: FOLLOW, userId})
export const unfollowUser = (userId: number) => ({type: UNFOLLOW, userId})