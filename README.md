# OMDb
Demo app for React Native using the OMBD API. Focused on the Star Trek movies. OMDB API – https://www.omdbapi.com/


[![Build Status](https://travis-ci.org/MarshalPaterson/OMDb.svg?branch=master)](https://travis-ci.org/MarshalPaterson/OMDb) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Solution Design
![Alt text](solution_design/design.png?raw=true "Design")
## Demo:
![Alt text](solution_design/omdb.mov.gif?raw=true "Demo")

# Running the application - yarn (moved on from npm)
```javascript
git clone https://github.com/MarshalPaterson/OMDb.git
yarn
yarn build
yarn start
yarn ios 
yarn android
```

## Visual Studio Code launch settings
```javascript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug iOS",
            "cwd": "${workspaceFolder}",
            "type": "reactnative",
            "request": "launch",
            "platform": "ios"
        },
        {
            "name": "Debug Android",
            "cwd": "${workspaceFolder}",
            "type": "reactnative",
            "request": "launch",
            "platform": "android"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/start"
        }
    ]
}
```
# State Management and Store - Mobx Vs Redux Vs State and Props
Small application handled by State and Props. No Mobx and no Redux.

# Unit Tests
```javascript
yarn test
```
Unit tests have been setup and some have been added, though better covered is needed.

## Notes and TODO:
 * The code as reduced comments, this was a choice to allow (hopefully) code readability.
 * There is also Travis-CI integration.
 * Search on 'Title of Movie'.
 * Fix Unit Test fail.
 * Need to add an app icon.
 * More Unit Tests

# REACT NATIVE IS AWESOME!!!
### SWIFT AND KOTLIN IS ALSO AWESOME!!!
