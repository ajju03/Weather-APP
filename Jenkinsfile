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
                // use sh on Linux agents
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                // build using the env IMAGE
                sh "docker build -t ${IMAGE} ."
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId:'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    // use password-stdin to avoid leaking password in args
                    sh '''
                      echo "$PASS" | docker login -u "$USER" --password-stdin
                      docker tag ${IMAGE} ${IMAGE}:latest
                      docker push ${IMAGE}:latest
                    '''
                }
            }
        }

        stage('Docker image pull') {
            steps {
                sh "docker pull ${IMAGE}:latest"
            }
        }

        stage('Docker Container') {
            steps {
                sh '''
                  docker stop weather-app || true
                  docker rm weather-app || true
                  docker run -d -p 3000:3000 --name weather-app ${IMAGE}:latest
                '''
            }
        }
    }

    post {
        failure {
            echo 'Build Failed!!'
        }
        success {
            echo 'Build Success!!!'
        }
    }
}

