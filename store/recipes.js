import Vue from 'vue'

export const state = () => ({
    list: [],
})

export const mutations = {
    get(state, recipesList) {
        state.list = recipesList
    },
    add(state, recipe) {
        state.list.push(recipe)
    },

    update(state, recipe) {
        const index = state.list.findIndex((r) => r.id === recipe.id)
        Vue.set(state.list, index, recipe)
    },

    remove(state, recipe) {
        const index = state.list.findIndex((r) => r.id === recipe.id)
        Vue.delete(state.list, index)
    },
}

export const actions = {
    async get({ commit }) {
        await this.app.$recipesRepository
            .get()
            .then((res) => commit('get', res))
    },

    async add({ commit }, payload) {
        await this.app.$recipesRepository
            .add(payload)
            .then((res) => commit('add', res))
    },

    async update({ commit }, payload) {
        await this.app.$recipesRepository
            .update(payload)
            .then((res) => commit('update', res))
    },

    async delete({ commit }, payload) {
        await this.app.$recipesRepository
            .remove(payload)
            .then((res) => commit('delete', res))
    },
}

export const getters = {
    getPermissions(state) {
        return state.permissions
    },
}
