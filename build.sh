#!/bin/bash

echo "NOTE: The api may delay due to waiting for the database to become available"

docker-compose up --build -d 

cd ./api

npm install --omit=dev

echo "Running seeds and migrations..."

npx dotenv -e .env.bash -- npm run seed

echo "The operation succeeded"