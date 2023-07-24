const addFunctions = require('./addTwoNumbers.js');
const multiplyFunctions = require('./multiplyTwoNumbers.js');
const subtractFunctions = require('./subtractTwoNumbers.js');
const sql = require('mssql');

describe('Database Test', () => {
    it('should retrieve a single row from the database', async () => {
        // Setup config for your database
        const config = {
            user: 'dapruser',
            password: 'ySwp0aGAmhI1jns0wgkb5zmH9iuW7AMQ',
            server: 'localhost', 
            database: 'sqldb-receipt-service',
            options: {
              encrypt: false, // Local SQL Server instance doesn't require encryption.
              trustServerCertificate: true
            }
        };
        
        // Create connection pool
        const pool = new sql.ConnectionPool(config);
        const poolConnect = pool.connect();

        // Errors handling
        pool.on('error', err => {
            // ... error handler
            console.log(err);
        });
        
        try {
            await poolConnect; // ensures that the pool has been created
            const request = pool.request(); // or: new sql.Request(pool1)
            const result = await request.query('SELECT TOP 1 * FROM dbo.Receipts');
            console.log(result.recordset[0]); // print the first record of the recordset
            
            // Now you can run your Jest assertions
            expect(result.recordset[0]).toHaveProperty('Id');
            expect(result.recordset[0]).toHaveProperty('ScanDate');
            pool.close();
        } catch (err) {
            console.error('SQL error', err);
        }
    });
});

