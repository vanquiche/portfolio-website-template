/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('inViewport', (element, inView) => {
  cy.get(element).within(($el) => {
    const screenHeight = cy.state('window').innerHeight;
    cy.wait(1000).then(() => {
      const rect = $el[0].getBoundingClientRect();
      if (inView) {
        // element is near top of viewport
        expect(rect.top).to.be.closeTo(0, 100);
      } else {
        // element is below viewport
        expect(rect.top).to.be.greaterThan(screenHeight);
      }
    });
  });
});

Cypress.Commands.add('getByData', (key, value) => {
  return cy.get(`[data-${key}="${value}"]`);
});
