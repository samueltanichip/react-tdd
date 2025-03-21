pipeline {
    agent any

    environment {
        // Variáveis de ambiente (opcional)
        NODE_ENV = 'production'
    }

    stages {
        // Etapa de instalação de dependências
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Instalando dependências...'
                    bat 'npm install' // Para npm
                }
            }
        }

        // Etapa de execução de testes
        stage('Run Tests') {
            steps {
                script {
                    echo 'Executando testes...'
                    bat 'npm test' // Para npm
                }
            }
        }

        // Etapa de build
        stage('Build') {
            steps {
                script {
                    echo 'Construindo o projeto...'
                    bat 'npm run build' // Para npm
                }
            }
        }

        // Etapa de deploy (opcional)
        stage('Deploy') {
            steps {
                script {
                    echo 'Realizando deploy...'
                    // Adicione aqui os comandos para deploy (ex: deploy para um servidor ou cloud)
                    bat 'echo "Deploy realizado com sucesso!"'
                }
            }
        }
    }

    // Pós-condições (opcional)
    post {
        success {
            echo 'Pipeline executado com sucesso!'
        }
        failure {
            echo 'Pipeline falhou. Verifique os logs para mais detalhes.'
        }
    }
}
