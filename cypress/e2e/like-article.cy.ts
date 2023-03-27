it('Like article', () => {
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
  let likesBefore = 0;
  cy.get('poly-card:nth-child(2) article .rating span').then(($span) => {
    likesBefore = Number($span.text());
  });
  cy.get('poly-card:nth-child(2) article .rating').click();
  cy.get('poly-card:nth-child(2) .rating span').should('have.text', (likesBefore + 1).toString());
  cy.get('poly-card:nth-child(2) article > a').click();
  cy.get('h2.title').should('contain.text', titleBefore);
  cy.get('article:first-child .rating span').should('have.text', (likesBefore + 1).toString());
  cy.get('article:first-child .rating').click();
});
