# Coding Challange

This is a React web application that has been containerized with Docker.

## Prerequisites

In order to run this application, you will need to have Docker installed on your machine. You can download Docker from the official website [here](https://www.docker.com/get-started).

## Getting Started

To run the application, follow these steps:

1.  Clone the repository to your local machine:

`git clone <repository-url>`

2.  Navigate to the project directory:

`cd coding-challange`

3.  Build the Docker image:

`docker build -t coding-challange .`

4.  Start the Docker container:

`docker run -p 3000:3000 coding-challange`

5.  Open your web browser and go to `http://localhost:3000` to view the application.

## Development

To start a development server for the application, follow these steps:

1.  Clone the repository to your local machine:

`git clone <repository-url>`

2.  Navigate to the project directory:

`cd coding-challange`

3.  Install the dependencies:

`npm install`

4.  Start the development server:

sql

`npm start`

5.  Open your web browser and go to `http://localhost:3000` to view the application.

## Build

To build the production version of the application, run the following command:

`npm run build`

This will create a `build` directory that contains the compiled JavaScript, HTML, and CSS files.

## Dockerfile

The Dockerfile for this application is located at `Dockerfile`. It is based on the official Node.js Alpine Linux image and includes the necessary steps to install the dependencies, build the application, and start the server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
