.PHONY: all client server

all:
	docker build -t my-fullstack-app .
	docker run --rm -p 5000:5000 my-fullstack-app

client:
	docker build -t my-frontend-app -f Dockerfile-client .
	docker run --rm -p 8080:80 my-frontend-app

server:
	docker build -t my-backend-app -f Dockerfile-server .
	docker run --rm -p 5000:5000 my-backend-app

clean:
	docker stop $(docker ps -a -q)  # Arrête tous les conteneurs
	docker rm $(docker ps -a -q)    # Supprime tous les conteneurs arrêtés

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  all        Build and run both client and server on port 5000"
	@echo "  client     Build and run the client container on port 8080"
	@echo "  server     Build and run the server container on port 5000"
	@echo "  clean      Stop and remove all containers"
