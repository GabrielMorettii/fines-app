<h1 align="center">Fines App 🚗</h1>

This is a project that allows you to consult information about traffic fines and also has an authentication system to ensure access to protected data.

## 👀 Observations

- I purposely left the .envs ready and visible.
- Note that the API may take time to build as it waits for the database to become available.

## 💻 Environment Setup <a name="enviroment-setup" />:

```bash
# Clone the repository

$ git clone https://github.com/GabrielMorettii/fines-app.git

# Enter the project folder:

$ cd fines-app

# Build the environment:

$ sh build.sh

# Wait for all scripts to run before testing the application.

# URLs 

# client: (http://localhost:5173)
# api (http://localhost:3030)

# To clean the environment

$ docker-compose down

```

## 🧪 Running the Tests  <a name="tests" />:

<p>API tests:</p>

```bash

# Remember to stop the previously built environment to start the tests

$ cd api

$ docker-compose up -d 

$ npm install

$ npm run test

# To stop the docker container:

$ docker-compose stop

# The test coverage can be seen at: src/__tests__/coverage/lcov-report/index.html

```

<p>Client tests:</p>

```bash

# be in the root of the project

$ docker-compose up -d

$ cd client

$ npm install

# interactive cypress interface

$ npm run cypress:open 

# or just through the terminal

$ npm run cypress:run

# To stop the docker container:

$ docker-compose stop

```
