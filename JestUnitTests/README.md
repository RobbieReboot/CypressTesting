# Unit test project

https://dev.azure.com/HillsHouse/UnitTests

## Install Node

[NodeJS installation page](https://nodejs.org/en/download)


## Install Jest :

```powershell
npm install --save-dev jest
```

## Run unit tests from command line
```powershell
npm test
```

The output should be :

```
> test
> jest

 PASS  ./tests.spec.js
  Tests Calculator Add Function
    √ 4+5 == 9 (2 ms)
    √ -4 + 10 == 5
  Tests Calculator Multiply Function
    √ 4+5 == 9 (1 ms)
    √ -4 + 10 == 5

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.394 s
Ran all test suites.
```

