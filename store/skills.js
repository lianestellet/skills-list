import Vue from 'vue'

export const state = () => ({
  list: [],
})

export const mutations = {
  get(state, skillsList) {
    state.list = skillsList
  },
  add(state, skill) {
    state.list.push(skill)
  },

  update(state, skill) {
    const index = state.list.findIndex((r) => r.id === skill.id)
    Vue.set(state.list, index, skill)
  },

  remove(state, skill) {
    const index = state.list.findIndex((r) => r.id === skill.id)
    Vue.delete(state.list, index)
  },
}

export const actions = {
  async get({ commit }) {
    await this.app.$skillsRepository.get().then((res) => commit('get', res))
  },

  async add({ commit }, payload) {
    await this.app.$skillsRepository
      .add(payload)
      .then((res) => commit('add', res))
  },

  async update({ commit }, payload) {
    await this.app.$skillsRepository
      .update(payload)
      .then((res) => commit('update', res))
  },

  async delete({ commit }, payload) {
    await this.app.$skillsRepository
      .remove(payload)
      .then((res) => commit('delete', res))
  },
}

export const getters = {
  getPermissions(state) {
    return state.permissions
  },
}
