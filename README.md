<h1 align="center">Fines App 🚗</h1>

Este é um projeto que permite consultar informações sobre multas de trânsito e também possui um sistema de autenticação para garantir o acesso aos dados protegidos.

## 💻 Setup do Ambiente <a name="enviroment-setup" />:

```bash
# Clone o repositório

$ git clone https://github.com/GabrielMorettii/fines-app.git

# Entre na pasta do projeto:

$ cd fines-app

# Construa o ambiente:

$ docker-compose up -d

# Espere alguns segundos para o ambiente subir por completo.

# URLs 

# cliente: (http://localhost:5173)
# api (http://localhost:3030)

```

## 🧪 Rodar os Testes <a name="tests" />:

<p>Testes da api:</p>

```bash

$ cd api

$ docker-compose up 

$ npm install

$ npm run test

# Para parar o container docker:

$ docker-compose stop

# A cobertura dos testes pode ser vista em: src/__tests__/coverage/lcov-report/index.html

```

<p>Testes do cliente:</p>

```bash

# esteja no root do projeto

$ docker-compose up

$ cd client

$ npm install

# interace interativa do cypress

$ npm run cypress:open 

# ou somente pelo terminal

$ npm run cypress:run

# Para parar o container docker:

$ docker-compose stop

```