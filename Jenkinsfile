pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Starts..'
                sh 'npm install'
                echo 'Building Ends..'
            }
        }
        stage('Test') {
            steps {
                echo PATH;
                echo 'Testing Starts..'
                sh 'make check || false'
                sh 'npm run test'
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