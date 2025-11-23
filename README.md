# 🌦️ Node.js Weather App

A simple and interactive Weather Application built using Node.js, Express.js, and a public Weather API. The application allows users to enter any location and get real-time weather information.
This project is containerized using Docker and can be integrated into a full CI/CD pipeline using Jenkins.

## 🚀 Features

- Fetches real-time weather data using a public Weather API

- Simple and user-friendly UI

- Built with Node.js + Express.js

- Supports dynamic location input

- Dockerized for easy deployment

- Suitable for CI/CD automation

## 🛠️ Tech Stack

- Backend: Node.js, Express.js

- View Engine: EJS

- API Client: Axios

- Containerization: Docker

- Version Control: Git, GitHub

- Automation (optional): Jenkins CI/CD

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ajju03/Weather-APP.git
cd Weather-APP
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Application
```bash
node index.js
```

Visit the app in your browser:[👉 http://localhost:3000](http://localhost:3000)

##🔌 API Used

This project uses OpenWeatherMap API for fetching real-time weather data.

API Endpoint example:
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}

## 🐳 Docker Support
###Build Docker Image
```
docker build -t weather-app .
```

###Run the Container
```
docker run -d -p 3000:3000 weather-app
```

Access

[👉 http://localhost:3000](http://localhost:3000)


## 🔄 CI/CD with Jenkins (Optional)

This project can be automated using a Jenkins pipeline:

Pipeline Stages:

- Checkout code from GitHub

- Install Node.js dependencies
  
- Build Docker image

- Push image to Docker Hub

- Deploy container

Sample pipeline step:
```bash
stage('Docker Build') {
    steps {
        bat "docker build -t weather-app ."
    }
}
```

## 👨‍💻 Author

Ajay Prasanna\
Feel free to or raise issues!
