export default ($axios) => ({
    get() {
        return $axios.$get('/recipes/get')
    },

    add(recipe) {
        return $axios.$post('/recipes/add', fruit)
    },

    update(fruit) {
        return $axios.$put('/recipes/update', recipe)
    },

    remove(fruit) {
        return $axios.$delete(`/recipes/remove/${recipe.id}`)
    },
})
