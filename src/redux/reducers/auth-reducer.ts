const AUTH_USER = 'AUTH_USER'

type AuthUserType = {
    type: typeof AUTH_USER,
    userData:{
        id: string
        login: string
        email: string
        isAuth: boolean
    }
}

type AuthReducerTypes =
    AuthUserType

export type DefaultAuthReducerType = {
    userData:{
        id: string | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

const DefaultAuthReducer: DefaultAuthReducerType = {
    userData:{
        id: null,
        login: null,
        email: null,
        isAuth: false
    }
}

export const authReducer = (state = DefaultAuthReducer, action: AuthReducerTypes) => {
    switch (action.type) {
        case AUTH_USER:
            //debugger
            return {
                ...state,
                userData:{
                    id: action.userData.id,
                    login: action.userData.login,
                    email: action.userData.email,
                    isAuth: action.userData.isAuth
                }
            }
        default:
            return state
    }
}

export const authUserOnApi = (id: string, login: string, email: string, isAuth: boolean): AuthUserType => ({
    type: AUTH_USER,
    userData:{
        id,
        login,
        email,
        isAuth
    }
})