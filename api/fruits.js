export default ($axios) => ({
    get() {
        return $axios.$get('/fruits/get')
    },

    add(fruit) {
        return $axios.$post('/fruits/add', fruit)
    },

    update(fruit) {
        return $axios.$put('/fruits/update', fruit)
    },

    remove(fruit) {
        return $axios.$delete(`/fruits/remove/${fruit.id}`)
    },
})
