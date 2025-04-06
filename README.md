### Prisma e Zod

Este mini projeto tem como objetivo consolidar conhecimentos sobre ORM e validação de dados em APIs RESTful. Para isso, foram utilizadas duas ferramentas modernas:

* Prisma, como ORM para manipulação de banco de dados de forma simples e eficiente;

* Zod, para validação e tipagem segura dos dados recebidos nas requisições.

O foco principal é testar e explorar a integração entre essas tecnologias na construção de rotas CRUD. Por se tratar de um ambiente de estudos e prototipagem, o banco de dados escolhido foi o SQLite, que é leve e não requer instalação adicional.

### Requisitos
* Node.js

* npm, yarn, pnpm ou qualquer outro gerenciador

### Instalação
1. Clone ou baixe este repositório.

2. No diretório do projeto, instale as dependências:

```bash
npm install
```

### Executando o projeto
Para iniciar o servidor, utilize:

```
npm run dev
```

O servidor estará disponível em http://localhost:3333.

### Rotas
* **POST /memories**

  Cria uma memoria.

  Exemplo de body:

```bash
{
  "content": "test",
  "coverUrl": "https://github.com/lucasouzamil.png",
  "isPublic": 1
}
```

### GET /memories
Retorna a lista de memórias.

* **PUT /memories/:id**

    Atualiza os dados de uma memória específica.

    Exemplo de body:

```bash
{
  "content": "test2",
  "coverUrl": "https://github.com/lucasouzamil.png",
  "isPublic": 1
}
```


### DELETE /memories/:id
Remove uma memória pelo ID.
