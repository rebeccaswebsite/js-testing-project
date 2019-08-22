# Notes on this repo

Package.json is a description of your node project containing dependencies that your project requires, name, author, etc.

Dev dependencies are only used for development (e.g. prettier/ eslint), as the client does not need these packages for the project to work.

Dependencies are node modules required for the library to work (e.g. React). The client would need this for the project to run.

So in this repo there is no node_modules folder, since the user cloning the project will need to run npm install themselves.

To run the tests for this project, in the command line put:
npm run test
