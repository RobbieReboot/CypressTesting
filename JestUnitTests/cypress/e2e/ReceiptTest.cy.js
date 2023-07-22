describe('Scans a receipt', function() {
    it('Scans Aldi_1.jpg ', function() {
      cy.fixture('Images/Aldi_1.jpg', 'binary') // assuming 'image.jpg' is in the fixtures folder
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
          // Create File object
          const file = new File([fileContent], 'Aldi_1.jpg', { type: 'image/jpeg' });
  
          // Create and set FormData to include in the body of our POST request
          const formData = new FormData();
          formData.set('file', file);
  
          // Post request
          cy.request({
            method: 'POST',
            url: 'https://wa-receipt-service-dev-uksouth-001.azurewebsites.net/Receipt/ScanFile?containerName=receipts', // replace with your endpoint
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then((response) => {
            // make assertions on the response
            expect(response.status).to.eq(200);
            // add more assertions as needed

            const uint8Array = new Uint8Array(response.body);
            const responseBodyStr = new TextDecoder('utf-8').decode(uint8Array);
            const responseBodyJSON = JSON.parse(responseBodyStr);
            console.log(responseBodyJSON);
            expect(responseBodyJSON[0]).to.have.property('totalPrice').and.to.equal(35.31);

          });
        });
    });
  });
  