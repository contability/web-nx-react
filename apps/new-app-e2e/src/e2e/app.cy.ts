import { getGreeting } from '../support/app.po';

describe('@web-nx-react-monorepo/new-app-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app content', () => {
    getGreeting().contains('Welcome new-app');
  });
});
