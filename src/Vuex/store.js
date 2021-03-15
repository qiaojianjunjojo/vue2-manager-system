import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:100,
    username:""
}

const getters = {
    getCount(state){
        return state.count*5
    }
}

const mutations = {
    mutationsAddCount(state, n = 1) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 1) {
        return (state.count -= n)
    },
    mutationUserchange(state,name){
        return state.username = name
    },
    mutationUserOut(state){
        return state.username = ""
    }
}

const actions = {
    actionsAddCount(content,n=0){
        //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
        //因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
        console.log(content)
        return content.commit('mutationsAddCount',n)
    },
    actionsReduceCount({commit},n=0){
        return commit("mutationsReduceCount",n)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // strict:true
})