export default ($axios) => ({
  get() {
    return $axios.$get('/skills/get')
  },

  add(skill) {
    return $axios.$post('/skills/add', skill)
  },

  update(skill) {
    return $axios.$put('/skills/update', skill)
  },

  remove(skill) {
    return $axios.$delete(`/skills/remove/${skill.id}`)
  },
})
