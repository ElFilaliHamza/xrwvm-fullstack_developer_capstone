# Coding Project Template

This project is part of the Coursera Capstone Project from IBM's "Full Stack Application Development Capstone Project." It involves developing a full-stack application using various technologies such as Django, React, Node.js, and more.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup and Installation](#setup-and-installation)
4. [Running the Django Application](#running-the-django-application)
5. [Configuring and Running the Sentiment Analysis App](#configuring-and-running-the-sentiment-analysis-app)
6. [Launching the Node.js Application](#launching-the-nodejs-application)
7. [Starting the Frontend](#starting-the-frontend)
8. [Course Information](#course-information)

## Project Overview

This project demonstrates the development of a full-stack application, showcasing skills in frontend and backend development, containerization, and deployment on cloud platforms.

## Prerequisites

- ![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white) Python 3.x
- ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) Docker
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) Node.js and npm
- ![IBM Cloud CLI](https://img.shields.io/badge/IBM%20Cloud%20CLI-052FAD?logo=ibmcloud&logoColor=white) IBM Cloud CLI (for Code Engine)

## Setup and Installation

### Virtual Environment

1. Install and activate a virtual environment:

   ```shell
   python3 -m pip install virtualenv
   python3 -m virtualenv djangoenv
   source djangoenv/bin/activate
   ```

2. Install the dependencies:

   ```shell
   pip install -r requirements.txt
   ```

## Running the Django Application

1. Run the migrations:

   ```shell
   python3 manage.py migrate --run-syncdb
   python3 manage.py makemigrations
   ```

2. Configure the Django app environment variables in `/server/djangoapp/.env`:

   ```sh
   backend_url=https://your-backend-url
   sentiment_analyzer_url=https://your-sentiment-analyzer-url
   ```

3. Start the Django server:

   ```shell
   python3 manage.py runserver
   ```

   *Note: Create a superuser if needed with the password 'root'.*

## Configuring and Running the Sentiment Analysis App

1. Build and run the Docker image:

   ```shell
   docker build . -t sentimentanalysis
   docker run -d -p 5000:5000 sentimentanalysis
   ```

2. Deploy the sentiment analysis service on IBM Code Engine:

   - Navigate to the `server/djangoapp/microservices` directory.
   - Build and push the Docker image:

     ```shell
     docker build . -t us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer
     docker push us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer
     ```

   - Deploy the application:

     ```shell
     ibmcloud ce application create --name sentianalyzer --image us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer --registry-secret icr-secret --port 5000
     ```

3. Update the `.env` file with the new deployment URL.

## Launching the Node.js Application

1. Build and start the Node.js application:

   ```shell
   docker build . -t nodeapp
   docker-compose up -d
   ```

## Starting the Frontend

1. Install dependencies and build the frontend:

   ```shell
   npm install
   npm run build
   ```
## Contact Information

For questions or support, please contact [me by email](hamzaelfilali1999.ac@gmail.com) or visit the project's discussion forum on Coursera.

## Course Information

This project is part of the IBM Full Stack Software Developer Specialization on Coursera. It covers:

- Designing applications and their architecture
- Creating web frontends with HTML, CSS, JavaScript, and React
- Implementing user management and authentication
- Developing backend services and database communication
- CI/CD pipelines and cloud deployment

For more details, refer to the course on Coursera.

---

This README provides a structured overview of the project, setup instructions, and relevant course information. Adjust the URLs and paths as necessary for your specific environment.