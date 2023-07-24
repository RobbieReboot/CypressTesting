# Cypress Environment Setup
1. Install [NodeJS](https://nodejs.org/en)
1. Install [NVM For Windows](https://github.com/coreybutler/nvm-windows/releases)
1. Install Yarn
   ```Powershell
   npm install yarn -g
   ```
   You only need to do 1-3 once for all future Cypress test projects.

## Creating a test project

1. Create a project folder & change into that directory.
1. Install Cypress
   ```Powershell
   npm install cypress --save-dev
   ```
   The --save-dev installs the packages ONLY in the current folder and updates the package.json file.

1. Install the file upload plugin

   ```Powershell
   npm install --save-dev cypress-file-upload
   ```

   The file upload plugin makes it easy to upload files from Cypress tests without writing lots of boiler plate functions.

1. Edit the package.json file and add a scripts node
   ```
   "scripts": {
       "test": "jest --ci --reporters=jest-junit --reporters=default",
       "cypress:open": "cypress open"
   }
   ```
1. Run the Cypress package
   ```Powershell
   npm run cypress:open
   ```

# Use the cypress RWA

1. Clone the [Cypress RWA](https://github.com/cypress-io/cypress-realworld-app)

1. Change to the version of Node that the Cypress RWA requires.

   ```powershell
   nvm install 16.16.0
   nvm use 16.16.0
   ```
1. Build & run the Cypress RWA (Or follow instructions on GitHub)

   ```powershell
   yarn
   yarn dev
   ```

1. Start a powershell Terminal and run the Cypress IDE

   ```Powershell
   cd CypressRWA\cypress-realworld-app
   yarn cypress:open
   ```

1. Read the [Cypress Intro documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)
1. Maybe do the [Cypress Testing your first application course](https://learn.cypress.io/testing-your-first-application)

# Standalon Cypress/Jest tests

1. change directory

```powershell
cd JestUnitTests
```

1. Run cypres

```Powershell
npm run cypress:open
```
Edit the tests in E2E folder. Hot reload is enabled so the tests will run on saving the changes.
