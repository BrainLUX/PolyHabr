it('Search article', () => {
  cy.visit('/search');
  const searchTitle = 'Test';
  cy.url().should('include', '/search');
  cy.get('.bar .search input').clear().type(searchTitle);
  cy.get('.bar .search svg').click();
  cy.get('.container').should('have.length.above',1);
  cy.get('article > a').click();
  cy.url().should('include', '/article');
  cy.url().should('not.include', '/search');
  cy.get('h2.title').should('contain.text',searchTitle);
  });
