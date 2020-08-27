import { createWrapper } from '@vue/test-utils'
import { mountCallback } from 'cypress-vue-unit-test'
import Index from '~/pages/Index.vue'

describe('Logo', () => {
  beforeEach(mountCallback(Index))

  it('should initialize', () => {
    cy.wrap(Cypress.vue)
      .should('not.be.undefined')
      .get('.skills-create')
      .should('have.length', 4)

    cy.wrap(createWrapper(Cypress.vue)).should((cmp) => cmp.isVueInstance())
  })
})
