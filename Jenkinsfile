pipeline {
    agent any

    stages {
        stage('Load Dependencies') {
            steps {
                echo 'Building Starts..'
                sh 'npm install'
                echo 'Building Ends..'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Testing Starts..'
                sh 'npm run test'
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