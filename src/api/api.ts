import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "api-key": "1395fcf2-9369-4c85-86f6-e7d2933a85b4"
    }
})

export const usersAPI = {
    getUsersDAL(currantPage: number,pageSize: number ){
        return instance.get(`users?page=${currantPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    unfollowUserDAL(id: number){
        return instance.delete(`follow/${id}`)
    },
    followUserDAL(id: number){
        return instance.post(`follow/${id}`, {})
    },
    getUserInfo(userId: string){
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    authUserDAL(){
        return instance.get(`auth/me`)
    }
}