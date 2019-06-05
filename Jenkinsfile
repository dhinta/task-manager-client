pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Starts..'
                bat 'npm install'
                echo 'Building Ends..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing Starts..'
                bat 'make check || false'
                bat 'npm run test'
                echo 'Testing Ends..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}