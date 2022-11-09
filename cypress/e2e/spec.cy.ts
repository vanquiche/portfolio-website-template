describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('page renders', () => {
    cy.get('#intro').should('exist');
  });
});
