it('Sort posts by rating and compare', () => {
  cy.visit('/login');
  cy.url().should('include', '/login');
  cy.get('.form.nickname input').clear().type('admin');
  cy.get('.form.password input').clear().type('admincool');
  cy.get('.content .enter').click();
  cy.url().should('not.include', 'login');
  cy.url().should('include', '/');
  cy.get('poly-sort-bar .bar .sort .item:nth-child(3)').should('exist');
  cy.get('poly-sort-bar .bar .sort .item:nth-child(3)').click();
  cy.get('poly-sort-bar .bar .options.active .items .chip:nth-child(4)').should('exist');
  cy.get('poly-sort-bar .bar .options.active .items .chip:nth-child(4)').click();
  cy.get('poly-sort-bar .bar .options.active button').should('exist');
  cy.get('poly-sort-bar .bar .options.active button').click();
  cy.wait(500);
  cy.get('poly-card:nth-of-type(1) article .rating span').should('exist');
  cy.get('poly-card:nth-of-type(2) article .rating span').should('exist');
  let secondArticleRating = 0;
  cy.get('poly-card:nth-of-type(2) article .rating span').then($rating => {
    secondArticleRating = Number($rating.get()[0].innerText);
  });
  cy.get('poly-card:nth-of-type(1) article .rating span').then($views => {
    expect(Number($views.get()[0].innerText)).to.be.greaterThan(secondArticleRating);
  });
});
