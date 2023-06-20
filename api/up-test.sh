docker-compose up -d

while ! docker exec integration-tests-prisma mysqladmin --user=admin --password=12345 --host "127.0.0.1" ping --silent &> /dev/null ; do
    echo "Waiting for MySQL container..."
    sleep 1
done

npx dotenv -e .env.test -- npm run migrate