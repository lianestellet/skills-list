import fruitsRepository from '~/api/fruits'

export default (ctx, inject) => {
    inject('fruitsRepository', fruitsRepository(ctx.$axios))
}
