markdown
Code kopieren
# Docker Simple Image

This repository contains a simple Node.js application that is containerized using Docker. The application demonstrates basic usage of Docker to create a container running a Node.js server.

## Prerequisites

Ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:oTreck/Docker-Simple-Image.git
   cd Docker-Simple-Image
Install dependencies:
bash
Code kopieren
npm install
Running the Application
Running Locally
bash
Code kopieren
node app.js
Navigate to http://localhost:3000.

Running with Docker
Build the Docker image:

bash
Code kopieren
docker build -t my-node-app .
Run the Docker container:

bash
Code kopieren
docker run -d -p 3000:3000 -e MESSAGE="Hello, Docker!" my-node-app
Navigate to http://localhost:3000.

Environment Variables
Set a custom message:

bash
Code kopieren
docker run -d -p 3000:3000 -e MESSAGE="Your custom message" my-node-app
Docker Commands
Build the Docker image:

bash
Code kopieren
docker build -t my-node-app .
Run the Docker container:

bash
Code kopieren
docker run -d -p 3000:3000 -e MESSAGE="Hello, Docker!" my-node-app
List running containers:

bash
Code kopieren
docker ps
Stop a running container:

bash
Code kopieren
docker stop <container_id>
View logs of a container:

bash
Code kopieren
docker logs <container_id>
License
This project is licensed under the MIT License.

go
Code kopieren

Du kannst diesen Text direkt in eine Datei namens `README.md` in deinem Repository kopieren und pushen.




