import skillsRepository from '~/api/skills'

export default (ctx, inject) => {
  inject('skillsRepository', skillsRepository(ctx.$axios))
}
