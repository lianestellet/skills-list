import recipesRepository from '~/api/recipes'

export default (ctx, inject) => {
    inject('recipesRepository', recipesRepository(ctx.$axios))
}
