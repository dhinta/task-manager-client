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
                echo 'Testing Starts..'
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