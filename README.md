Docker Simple Image
This repository contains a simple Node.js application that is containerized using Docker. The application demonstrates basic usage of Docker to create a container running a Node.js server.

Table of Contents
Prerequisites
Installation
Running the Application
Environment Variables
Docker Commands
Contributing
License
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Docker
Node.js
Installation
Clone the repository:

bash
Code kopieren
git clone git@github.com:oTreck/Docker-Simple-Image.git
cd Docker-Simple-Image
Install dependencies:

bash
Code kopieren
npm install
Running the Application
Running Locally
You can run the Node.js application locally using Node.js:

bash
Code kopieren
node app.js
Then open your browser and navigate to http://localhost:3000 to see the application running.

Running with Docker
Build the Docker image:

bash
Code kopieren
docker build -t my-node-app .
Run the Docker container:

bash
Code kopieren
docker run -d -p 3000:3000 -e MESSAGE="Hello, Docker!" my-node-app
Open your browser and navigate to http://localhost:3000 to see the application running inside the Docker container.

Environment Variables
The application uses an environment variable MESSAGE to display a custom message. You can set this variable when running the Docker container using the -e flag:

bash
Code kopieren
docker run -d -p 3000:3000 -e MESSAGE="Your custom message" my-node-app
Docker Commands
Here are some useful Docker commands for managing the application:

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
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

License
This project is licensed under the MIT License. See the LICENSE file for details.
