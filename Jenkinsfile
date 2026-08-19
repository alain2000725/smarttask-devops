pipeline {
    agent {
        label 'docker-agent'
    }

    environment {
        DOCKER_REGISTRY = 'yvesmayombo'
        DOCKER_CREDENTIALS = 'dockerhub-credentials'
        TAG = 'v2'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Recuperation du code depuis GitHub...'
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo 'Construction de l image frontend...'
                script {
                    docker.build("${DOCKER_REGISTRY}/smarttask-frontend:${TAG}", "-f frontend/Dockerfile frontend/")
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                echo 'Construction de l image backend...'
                script {
                    docker.build("${DOCKER_REGISTRY}/smarttask-backend:${TAG}", "-f backend/Dockerfile backend/")
                }
            }
        }

        stage('Build Database Image') {
            steps {
                echo 'Construction de l image base de donnees...'
                script {
                    docker.build("${DOCKER_REGISTRY}/smarttask-db:${TAG}", "-f database/Dockerfile database/")
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                echo 'Push des images vers Docker Hub...'
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS) {
                        docker.image("${DOCKER_REGISTRY}/smarttask-frontend:${TAG}").push()
                        docker.image("${DOCKER_REGISTRY}/smarttask-backend:${TAG}").push()
                        docker.image("${DOCKER_REGISTRY}/smarttask-db:${TAG}").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline termine avec succes !'
        }
        failure {
            echo 'Pipeline echoue !'
        }
    }
}
