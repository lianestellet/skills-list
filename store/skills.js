import Vue from 'vue'

export const state = () => ({
  list: [
    { id: 1, name: 'C#', checked: false, proficiency: 1 },
    { id: 2, name: 'NodeJs', checked: false, proficiency: 1 },
    { id: 3, name: 'Vue', checked: true, proficiency: 1 },
    { id: 4, name: 'Css', checked: false, proficiency: 1 },
  ],
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

  async add({ commit, state }, payload) {
    const newId = state.list.reduce((a, b) => (a.id > b.id ? a.id : b.id)) + 1
    commit('add', { ...payload, id: newId })

    // await this.app.$skillsRepository
    //   .add({ ...payload, id: newId })
    //   .then((res) => commit('add', res))
  },

  async update({ commit }, payload) {
    commit('update', payload)

    // await this.app.$skillsRepository
    //   .update(payload)
    //   .then((res) => commit('update', res))
  },

  async remove({ commit }, payload) {
    commit('remove', payload)

    // await this.app.$skillsRepository
    //   .remove(payload)
    //   .then((res) => commit('delete', res))
  },
}

export const getters = {
  list(state) {
    return state.list
  },
}
