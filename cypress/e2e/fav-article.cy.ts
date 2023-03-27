it('Fav article', () => {
  cy.visit('/login');
  cy.url().should('include', '/login');
  cy.get('.form.nickname input').clear().type('admin');
  cy.get('.form.password input').clear().type('admincool');
  cy.get('.content .enter').click();
  cy.url().should('not.include', 'login');
  cy.url().should('include', '/');
  let titleBefore = "";
  cy.get('poly-card:nth-child(2) article .title').then(($span) => {
    titleBefore = $span.text();
  });
  cy.get('poly-card:nth-child(2) article .favourite').click();
  cy.get('poly-card:nth-child(2) article > a').click();
  cy.get('h2.title').should('contain.text', titleBefore);
  cy.get('article:first-child .favourite svg').should("have.class", "selected");
  cy.get('article:first-child .favourite').click();
});
