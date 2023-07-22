# Cypress RWA setup

1. Install [NodeJS](https://nodejs.org/en)
1. Install [NVM For Windows](https://github.com/coreybutler/nvm-windows/releases)
1. Install Yarn
    ```Powershell
    npm install yarn -g
    ```
1. Change to the version of Node that Cypress RWA requires
    ```powershell
    nvm install 16.16.0
    nvm use 16.16.0
    ```
1. Build & run the Cypress RWA 
    ```powershell
    yarn
    yarn dev
    ```

1. Start the Cypress IDE
    ```Powershell
    cd CypressRWA\cypress-realworld-app
    yarn cypress:open
    ```


1. Read the [Cypress Intro documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)
1. Maybe do the [Cypress Testing your first application course](https://learn.cypress.io/testing-your-first-application
)

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

>NOTE: The cypress command is in the scripts node of package.json
