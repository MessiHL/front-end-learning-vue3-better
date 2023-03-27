import { defineStore } from "pinia";

interface UserInfo {
    name:string,
    age:number,
}

interface State {
    count:number
    userList:UserInfo[]
    user:UserInfo | null
}

export const userStore = defineStore('userStore',{
    state:():State=>{
        return {
            count:1,
            userList:[],
            user:null
        }
    }
})