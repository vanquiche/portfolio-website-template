declare namespace Cypress {
  interface Chainable {
    isInViewport(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    isNotInViewport(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
  }
  interface State {
    (property: 'document'): Document;
    (property: 'window'): Cypress.AUTWindow;
    (property: 'runnable'): any;
    // etc. etc.
    (property: string): any;
  }

  interface cy {
    state: State;
  }
}
