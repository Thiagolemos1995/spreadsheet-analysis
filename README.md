# Spreadsheet Analyzer

O Spreadsheet Analyzer é um sistema onde o usuário pode entrar com os dados da planilha para ser tratado e extraido a um banco de dados e posteriormente disponibilizado em uma interface web.

A Princípio este sistema irá tratar de forma estática dados de uma planilha de assinantes, conforme desafio.

## Tecnologias utilizadas

Foi utilizado como gerenciador do respositório o NX.

O NX é um gerenciador de Monorepo eficiente que auxilia principalmente no desenvolvimento de aplicações em escala

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

---

Para a aplicação Back end foi utilizado NestJS.

O NestJS é um framework Node, que utiliza o padrão typescript, onde podemos desenvolver utilizando injeções de dependências, tornando
mais simples o desenvolvimento das aplicações.

<a alt="Nest logo" href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/28507035?s=48&v=4" width="45"></a>

---

Como banco de dados foi utilizado Postgresql.

O Postgresql é um sistema gerenciador de banco de dados e relacional de código aberto.

<a alt="postgres logo" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" width="45"></a>

---

Para o Front end foi utilizado NuxtJS.

O NuxtJS é um framework Vue, uma poderosa ferramenta de desenvolvimento, onde é possível renderizar componentes e realizar o data fetching no lado do servidor
disponibilizando uma melhor performance para aplicação.

<a alt="Nuxt logo" href="https://nuxt.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/23360933?s=200&v=4" width="45" ></a>

---

Para os componentes foi utilizado a biblioteca Tailwind CSS.

Uma biblioteca que fornece uma série classes pré-definidas para estilização de seu código.

<a alt="Tailwind CSS logo" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/67109815?s=48&v=4" width="45" ></a>

---

## Instalação do Repositório

Para instalar as dependências no repositório:

- Utilizando npm:

  `npm i`

- Utilizando Yarn:

  `Yarn`

Para rodar o projeto é necessário possuir o PostgresSQL instalado e rodando.

Utilizando o WSL2:

- Instalando POSTGRESQL

  `sudo apt-get install postgresql`

- Definir a senha 'admin' ao POSTGRESQL:

  `sudo passwd postgres`

  Após este comando, será informado uma interface para inputar a nova senha e confirmar nova senha.

- Inicie o serviço do banco de dados, caso não tenha iniciado:

  `sudo service postgresql start`

- Para conectar ao postgres:

  `sudo -u postgres psql`

- Criando a base de dados subscriberdata:

  `CREATE DATABASE subscriberdata;`

- Para confirmar se a base de dados foi criada, execute o comando:

  `\l`

Com o posgres criado, configurado e rodando, podemos rodar a aplicação.
Com o repositório aberto, abra um terminal e execute os comandos:

- Para rodar o analyzer-service (aplicação back-end):
  `yarn analyzer-service` ou `npm run analyzer-service`
- Para rodar a analyzer-ui (aplicação front-end):
  `yarn analyzer-ui` ou `npm run analyzer-ui`

# Próximos passos

- Componentização para melhor leitura e manutenibilidade do código;
- Melhorar documentação;
- Corrigir problema de conexão com o banco de dados ao subir o docker-compose
- Adicionar o restantes dos dados da planilha teste para ser salvo no banco de dados;
- Disponibilizar os novos dados no front.
