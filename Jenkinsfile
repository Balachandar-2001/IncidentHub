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

        stage('Run the docker compose'){
            steps{
                sh 'docker compose build'
            }
        }

        stage('Print the docker images'){
            steps{
                sh 'docker images'
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