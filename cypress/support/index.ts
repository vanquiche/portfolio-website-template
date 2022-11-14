declare namespace Cypress {
  interface Chainable {
    inViewport(
      element: string,
      inView: boolean
    ): Chainable<JQuery<HTMLElement>>;

    getByData(key: string, value: string): Chainable<JQuery<HTMLElement>>;
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
