echo "Stopping services"
docker compose down

echo "Rebuilding all images"
docker-compose build

echo "Starting services"
docker compose up