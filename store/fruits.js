import Vue from 'vue'

export const state = () => ({
    list: [],
})

export const mutations = {
    get(state, fruitsList) {
        state.list = fruitsList
    },
    add(state, fruit) {
        state.list.push(fruit)
    },

    update(state, fruit) {
        const index = state.list.findIndex((f) => f.name === fruit.name)
        Vue.set(state.list, index, fruit)
    },

    remove(state, fruit) {
        const index = state.list.findIndex((f) => f.name === fruit.name)
        Vue.delete(state.list, index)
    },
}

export const actions = {
    async get({ commit }) {
        await this.app.$fruitsRepository.get().then((res) => commit('get', res))
    },

    async add({ commit }, payload) {
        await this.app.$fruitsRepository
            .add(payload)
            .then((res) => commit('add', res))
    },

    async update({ commit }, payload) {
        await this.app.$fruitsRepository
            .update(payload)
            .then((res) => commit('update', res))
    },

    async delete({ commit }, payload) {
        await this.app.$fruitsRepository
            .remove(payload)
            .then((res) => commit('delete', res))
    },
}

export const getters = {
    getPermissions(state) {
        return state.permissions
    },
}
