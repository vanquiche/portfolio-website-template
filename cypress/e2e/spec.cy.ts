describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('Navigation', () => {
    it('scroll to projects', () => {
      cy.getByData('navitem', 'projects').click();
      cy.inViewport('#projects', true);
    });

    it('scroll to contact', () => {
      cy.getByData('navitem', 'contact').click();
      cy.inViewport('#contact', true);
    });

    it('scroll to skills', () => {
      cy.getByData('navitem', 'software').click();
      cy.inViewport('#skills', true);
    });
  });

  xcontext('External Links', () => {
    it('navigates to gitHub', () => {
      cy.getByData('socialLinks', 'github').click();
      cy.location('pathname').should('eq', 'https://github.com/vanquiche');
    });
  });
});
