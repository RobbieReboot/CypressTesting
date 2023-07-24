describe('template spec', () => {

  it('should retrieve a single row from the database', () => {
    cy.task('queryDatabase', 'SELECT TOP 1 * FROM dbo.Receipts').then(result => {
      // Now you can run your Cypress assertions
      console.log("Id       : "+result.recordset[0].Id);
      console.log("ImageURI : "+result.recordset[0].ImageDataUri);
      
      expect(result.recordset[0].Id).to.equal('12345');
      expect(result.recordset[0]).to.have.property('ScanDate');
      expect(result.recordset[0]).to.have.property('ImageDataUri');
    });
  })

})
