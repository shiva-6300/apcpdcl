pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/shiva-6300/apcpdcl.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('shiva') {  
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('shiva') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                if [ -d "$WORKSPACE/shiva/build" ]; then
                    sudo rm -rf /var/www/html/*
                    sudo cp -r $WORKSPACE/shiva/build/* /var/www/html/
                    sudo chown -R www-data:www-data /var/www/html
                else
                    echo "Build folder not found! Deployment skipped."
                    exit 1
                fi
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
