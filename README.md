# 🎬 Projeto de Análise de Intervalos de Prêmios de Filmes

Este projeto é uma API que analisa intervalos de prêmios de filmes, fornecendo informações sobre os produtores com os maiores e menores intervalos entre vitórias consecutivas.

## 🚀 Como rodar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (desenvolvido na versão 18 >)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

### Passos para configurar o projeto

1. **Clone o repositório (ou baixe o código):**

   ```bash
   git clone https://github.com/alissoncout/teste-node
   cd teste-node
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o banco de dados (se necessário):**

   Este projeto usa um banco de dados SQLite para armazenar os dados dos filmes. O banco de dados será criado automaticamente a cada inicialização do servidor. 

4. **Carregue os dados iniciais:**

   O projeto inclui um serviço para carregar dados de um arquivo CSV (`movies.csv`) para o banco de dados. Isso é feito automaticamente na inicialização do servidor. Certifique-se de que o arquivo `movies.csv` esteja acessível na raiz do projeto e com permissões de leitura.

### Rodando a aplicação

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor na porta `3000`. Você pode acessar a API em:

```
http://localhost:3000
```

### Endpoints da API

- **GET `/awards/intervals`**  
  Retorna os produtores com os maiores e menores intervalos entre vitórias consecutivas.  
  Exemplo de resposta:

  ```json
  {
    "min": [
      {
        "producer": "Producer A",
        "interval": 1,
        "previousWin": 2010,
        "followingWin": 2011
      }
    ],
    "max": [
      {
        "producer": "Producer B",
        "interval": 10,
        "previousWin": 2000,
        "followingWin": 2010
      }
    ]
  }
  ```

---

## 🧪 Como rodar os testes

O projeto inclui testes de integração para garantir que a API funcione corretamente. Para rodar os testes, siga os passos abaixo:

1. **Instale as dependências de desenvolvimento (se ainda não fez isso):**

   ```bash
   npm install
   ```

2. **Execute os testes:**

   ```bash
   npm test
   ```

   Isso rodará todos os testes definidos na pasta `tests/` usando o [Jest](https://jestjs.io/).

### O que os testes verificam?

- **Teste de integração:**  
  Verifica se o endpoint `/awards/intervals` retorna os dados corretos, incluindo os produtores com os menores e maiores intervalos entre vitórias.

---

## 🛠 Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
/projeto
│
├── server.js         # Ponto de entrada da aplicação
├── package.json      # Dependências e scripts do projeto
├── database.js       # Configurações e scripts do banco de dados
├── routes.js         # Definição das rotas da API
├── movies.controller.js # Controlador de rotas da API
├── movies.service.js # Lógica de negócio (ex: carregamento de CSV)
├── tests/            # Testes de integração
│   └── movies.test.js
└── README.md         # Documentação do projeto
```

---

## Observações

Desenvolvi esse teste de forma rápida e prática atendendo as requisitos solicitados.
Apenas para conhecimento, poderia ser realizado muito mais coisas, como estruturar o projeto de forma mais organizada (utilizando Design Pattern), validações e etc.

---