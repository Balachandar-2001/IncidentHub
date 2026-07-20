pipeline
{

    agent any

    environment{
        IMAGE_FRONTEND_NAME="30balachandar333/incident-hub-frontend"
        IMAGE_BACKEND_NAME="30balachandar333/incident-hub-backend"
        IMAGE_DB_NAME="30balachandar333/incident-hub-db"
        BUILD_NUMBER="${env.BUILD_NUMBER}"
    }

    stages{

        stage('Git checkout'){
            steps{
                git branch: 'main', 
                url: 'https://github.com/Balachandar-2001/IncidentHub.git'
            }
        }

        stage('Stop the existing containers'){
            steps{
                sh 'docker compose down'
            }
        }

        stage('Run the docker compose'){
            steps{
                sh 'docker compose build'
            }
        }

        stage('List the images'){
            steps{
                sh 'docker images'
            }
        }

        stage('Tag the images'){
            steps{
                sh "docker tag incidenthub-frontend:latest ${IMAGE_FRONTEND_NAME}:${BUILD_NUMBER}"
                sh "docker tag incidenthub-backend:latest ${IMAGE_BACKEND_NAME}:${BUILD_NUMBER}"
            }
        }

        stage('Push the images to Docker Hub'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                    sh "docker push ${IMAGE_FRONTEND_NAME}:${BUILD_NUMBER}"
                    sh "docker push ${IMAGE_BACKEND_NAME}:${BUILD_NUMBER}"
                }
            }
        }

        stage('Run the containers'){
            steps{
                sh 'docker compose up -d'
            }
        }

        stage('List the running containers'){
            steps{
                sh 'docker ps'
            }
        }

    }

    post{
        always{
            cleanWs()
        }
        success{
            echo "Build completed successfully."
        }
    }

}