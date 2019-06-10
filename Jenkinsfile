pipeline {
    agent any

    stages {
        stage('Load Dependencies') {
            steps {
                echo 'Building Starts..'
                bat 'npm install'
                echo 'Building Ends..'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Testing Starts..'
                bat 'npm run test'
                echo 'Testing Ends..'
            }
        }
        stage('Build') {
            steps {
                echo 'do build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}