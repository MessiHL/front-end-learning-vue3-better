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
    },
    // Action 相当于组件中的 method
    actions:{
        incremnet(){
            this.count++;
        },
        randomizeCounter(){
            this.count = Math.round(100 * Math.random())
        }
    }
    
});