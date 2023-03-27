import { defineStore } from 'pinia';
export const userCounterStore = defineStore('counterStore',{
    state:()=>({
        count:0
    }),
    // Getter 完全等同于 store 的 state 的计算值
    getters:{
        doubleCount: (state) => state.count * 2,
        /**
         * 可以用 this 来引用 getter
         * 此处不能使用箭头函数
         */
        doubleCountPlusOne(){
            return this.doubleCount as any + 1;
        }
    }
    
});