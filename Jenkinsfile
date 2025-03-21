pipeline {
    agent any // Executa em qualquer agente disponível

    environment {
        // Variáveis de ambiente (opcional)
        NODE_ENV = 'production'
    }

    stages {
        // Etapa de configuração do ambiente
        stage('Setup Node.js') {
            steps {
                script {
                    // Instala a versão especificada do Node.js (opcional, se estiver usando nvm)
                    bat '''
                        nvm install 18
                        nvm use 18
                    '''
                    // No Windows, você pode usar o nvm-windows ou instalar o Node.js manualmente
                    bat '''
                        nvm install 18
                        nvm use 18
                    '''
                }
            }
        }

        // Etapa de instalação de dependências
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Instalando dependências...'
                    bat 'npm install' // Para npm
                    // bat 'yarn install' // Para yarn
                    // No Windows:
                    bat 'npm install' // Para npm
                    // bat 'yarn install' // Para yarn
                }
            }
        }

        // Etapa de execução de testes
        stage('Run Tests') {
            steps {
                script {
                    echo 'Executando testes...'
                    bat 'npm test' // Para npm
                    // bat 'yarn test' // Para yarn
                    // No Windows:
                    bat 'npm test' // Para npm
                    // bat 'yarn test' // Para yarn
                }
            }
        }

        // Etapa de build
        stage('Build') {
            steps {
                script {
                    echo 'Construindo o projeto...'
                    bat 'npm run build' // Para npm
                    // bat 'yarn build' // Para yarn
                    // No Windows:
                    bat 'npm run build' // Para npm
                    // bat 'yarn build' // Para yarn
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
                    // No Windows:
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
