pipeline {
    agent any
    
    environment {
        IMAGE = "ajayprasannaa/weather-app"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ajju03/Weather-APP.git'
            }
        }
        
        stage('Install Node Modules') {
            steps {
                bat 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                bat "docker build -t %IMAGE% ."
            }
        }
        stage('Docker Push') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'DOCKERHUB_CREDENTIALS', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
            bat """
                docker login -u %USER% -p %PASS%
                docker tag weather-app ajayprasannaa/weather-app:latest
                docker push ajayprasannaa/weather-app:latest
            """
        }
    }
}
        stage('Docker image pull') {
            steps {
                bat "docker pull ajayprasannaa/weather-app:latest"
            }
        }
        
        stage('Docker Container') {
    steps {
        bat """
        docker stop weather-app || echo "No container to stop"
        docker rm weather-app || echo "No container to remove"
        docker run -d -p 3000:3000 --name weather-app ajayprasannaa/weather-app:latest
        """
    }
}
    }

    post {
        failure {
            echo 'Build Failed!!'
        }
        success {
            echo 'Build Success'
        }
    }
}