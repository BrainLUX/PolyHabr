it('Sort posts by date and compare', () => {
  cy.visit('/login');
  cy.url().should('include', '/login');
  cy.get('.form.nickname input').clear().type('admin');
  cy.get('.form.password input').clear().type('admincool');
  cy.get('.content .enter').click();
  cy.url().should('not.include', 'login');
  cy.url().should('include', '/');
  cy.get('poly-sort-bar .bar .sort .item:nth-child(2)').should('exist');
  cy.get('poly-sort-bar .bar .sort .item:nth-child(2)').click();
  cy.get('poly-sort-bar .bar .options.active .items .chip:nth-child(4)').should('exist');
  cy.get('poly-sort-bar .bar .options.active .items .chip:nth-child(4)').click();
  cy.get('poly-sort-bar .bar .options.active button').should('exist');
  cy.get('poly-sort-bar .bar .options.active button').click();
  cy.get('poly-sort-bar .bar .sort .item:nth-child(1)').click();
  cy.wait(500);
  cy.get('poly-card:nth-of-type(1) article .date').should('exist');
  cy.get('poly-card:nth-of-type(2) article .date').should('exist');
  let secondArticleDate = new Date();
  cy.get('poly-card:nth-of-type(2) article .date').then($date => {
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    secondArticleDate = new Date($date.get()[0].innerText.replace(pattern, '$3-$2-$1'));
  });
  cy.get('poly-card:nth-of-type(1) article .date').then($date => {
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    const firstArticleDate = new Date($date.get()[0].innerText.replace(pattern, '$3-$2-$1'));
    expect(firstArticleDate).to.be.gte(secondArticleDate);
  });
});
