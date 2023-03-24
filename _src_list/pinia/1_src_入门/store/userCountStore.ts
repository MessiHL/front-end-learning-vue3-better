import { defineStore } from "pinia";

export const userCountStore = defineStore('couter',{
    // state 是 store 的数据 (data)
    state:()=>({count:0}),
    // getters 是 store 的计算属性 (computed)
    getters:{
        double:(state)=>state.count*2
    },
    // actions 则是方法 (methods)
    actions:{
        increment(){
            this.count++;
        }
    }

})