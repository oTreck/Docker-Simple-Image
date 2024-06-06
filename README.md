# Docker Simple Image

This repository contains a simple Node.js application that is containerized using Docker. The application demonstrates basic usage of Docker to create a container running a Node.js server.

## Prerequisites

Ensure you have the following installed:

- Docker
- Node.js

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:oTreck/Docker-Simple-Image.git
   cd Docker-Simple-Image

## USE
docker build -t my-node-app <br>
docker run -d -p 3000:3000 -e MESSAGE="Hello, Docker!" my-node-app <br>
docker exec -it  <container_id> /bin/sh <br>
echo $MESSAGE <br>

Navigate to <b> http://localhost:3000.</b>



##  License
This project is licensed under the MIT License.

