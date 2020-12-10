import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "api-key": "1395fcf2-9369-4c85-86f6-e7d2933a85b4"
    }
})

export const getUsersDAL = (currantPage: number,pageSize: number ) => {
    return instance.get(`users?page=${currantPage}&count=${pageSize}`)
        .then(res => {
            return res.data
        })
}

export const unfollowUserDAL = (id: number) => {
    return instance.delete(`follow/${id}`)
}

export const followUserDAL = (id: number) => {
    return instance.post(`follow/${id}`, {})
}


export const authUserDAL = () => {
    return instance.get(`auth/me`)
}