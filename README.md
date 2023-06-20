<h1 align="center">Fines App 🚗</h1>

Este é um projeto que permite consultar informações sobre multas de trânsito e também possui um sistema de autenticação para garantir o acesso aos dados protegidos.

## 👀 Observações

- Deixei os .envs prontos e visíveis de propósito.
- Note que a api pode demorar para buildar por estar esperando o banco ficar disponível.

## 💻 Setup do Ambiente <a name="enviroment-setup" />:

```bash
# Clone o repositório

$ git clone https://github.com/GabrielMorettii/fines-app.git

# Entre na pasta do projeto:

$ cd fines-app

# Construa o ambiente:

$ sh build.sh

# Aguarde todos os scripts rodarem para testar a aplicação.

# URLs 

# cliente: (http://localhost:5173)
# api (http://localhost:3030)

# Para limpar o ambiente

$ docker-compose down

```

## 🧪 Rodar os Testes <a name="tests" />:

<p>Testes da api:</p>

```bash

# Lembre-se de parar o ambiente buildado anteriormente para começar os testes

$ cd api

$ docker-compose up -d 

$ npm install

$ npm run test

# Para parar o container docker:

$ docker-compose stop

# A cobertura dos testes pode ser vista em: src/__tests__/coverage/lcov-report/index.html

```

<p>Testes do cliente:</p>

```bash

# esteja no root do projeto

$ docker-compose up -d

$ cd client

$ npm install

# interace interativa do cypress

$ npm run cypress:open 

# ou somente pelo terminal

$ npm run cypress:run

# Para parar o container docker:

$ docker-compose stop

```
