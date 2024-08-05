
# Desafio 2 - CRUD Operations

#### Tema: Lista de Jogos 

#### Link para o Figma: https://www.figma.com/design/tPWps2c0ar0HlZlsNMPRSz/Desafio-2---Semana-8-(Copy)?node-id=0-1&t=JeFOxUosmVw4hIUG-1

## Descrição

Este projeto é uma aplicação web que permite aos usuários gerenciar uma lista de jogos. O sistema é composto por um front-end desenvolvido em React com TypeScript, um back-end em Node.js com Express, e um banco de dados MongoDB. O projeto inclui autenticação de usuários, controle de rotas, e operações CRUD (criar, ler, atualizar, deletar) para itens.


## Como utilizar o projeto

### 1. Instalação de dependências
Utilize o comando npm i dentro do terminal da pasta do projeto.

### 2. Trocar credenciais de acesso do MongoDB
Dentro do arquivo db.js, na pasta config do backend, troque a chave de conexão na linha de código await mongoose.connect('coloque-aqui-sua-chave-com-senha') para conseguir armazenar os dados.

### 3. Iniciar Frontend
Após a instalação das dependências utilize o comando 'npm run dev' no terminal do projeto para iniciar o Frontend.

### 4. Iniciar backend
Após a instalação das dependências utilize o comando 'npm run back' no terminal do projeto para iniciar o Backend.

### 5. Rota do navegador
Entre na rota http://localhost:5173/ no seu navegador para poder utilizar a aplicação


## Funcionalidades

### Autenticação de Usuários
- Login obrigatório para acessar as rotas protegidas.
- Utilização de LocalStorage para armazenamento de informações de login.
### Tela Home
- Possui dois Cards. Um com a contagem de jogos adicionados e outros com o total de generos de jogos.
### Menu Lateral
- Links para a Home, botão de Logout, e referência ao card de jogos.
- Utiliza o email do usuário logado como referência.
- Foto de perfil com as iniciais do email do usuário.
- Efeito de hover no menu lateral.
### Tela de Detalhes
- Fotos na lista de detalhes possui as iniciais dos produtos/itens.
- Botões para adicionar, editar e deletar itens, com modais de confirmação.
- Cada produto possui nome, descrição, preço, Categoria e a data de inclusão.
### Formulários
- Telas para atualização e cadastro de novos itens.
- Layouts responsivos e consistentes com o design do Figma.
### API
- Todas as funcionalidades consomem a API desenvolvida em Node.js, sem persistência de dados no front-end.


## Tecnologias Utilizadas
### Front-end
- React com TypeScript.
### Back-end
- Node.js com Express.
### Banco de Dados
- MongoDB.
### Autenticação
- Firebase Authentication.
### Armazenamento Local
- LocalStorage para informações de login.


## Aprendizados

Este desafio foi a primeira experiência dos integrantes no desenvolvimento de uma aplicação em grupo. Ao longo das duas ultimas semanas, aprofundamos nossos conhecimentos em Typescript, NodeJS, MongoDB e Firebase aplicando os conceitos teóricos da trilha na prática. A colaboração e esforço da equipe foi crucial para superar os obstáculos encontrados e garantir a qualidade da entrega. Em grupo, aprendemos que dois dos pontos mais importantes durante a etapa de desenvolvimento são a organização do código e a utilização de boas práticas de desenvolvimento.


## Autores

- [@GutoKophal](https://github.com/GutoKophal)
- [@henriquenogarini](https://github.com/henriquenogarini)
- [@Cintrex01](https://github.com/Cintrex01)
- [@BuenoMVP](https://github.com/BuenoMVP)

