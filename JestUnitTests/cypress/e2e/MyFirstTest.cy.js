// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io');
//     cy.contains('type').click();

//     cy.url().should('include','/commands/actions');

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })

//calling a web API
describe('API Test', () => {
  it('should call the web API and verify the response', () => {
    // Make the API request
    cy.request({
      method: 'GET',
      url: 'https://wa-receipt-service-dev-uksouth-001.azurewebsites.net/Environment', 
    }).then((response) => {
      // Verify the response status code
      expect(response.status).to.equal(200);
    
      expect(response.body).contains('Azure.Core');

      // make sure its the development version.
      cy.wrap(response.body).should('be.a', 'string').and('match', /.*ASPNETCORE_ENVIRONMENT\s+=\s+Development.*/);

    });
  });
});