## Prisma e Zod

Este mini projeto tem como objetivo consolidar conhecimentos sobre ORM (emap bani) e validações de dados em APIs RESTful. Para isso, foram utilizadas duas tecnologias modernas:

- Prisma, como ORM para manipulações de banco de dados de forma simples e eficiente;
- Zod, para validarções e tipagem eseguras dos dados recebidos nas requisições.

O foco principal eé testar e explorar la integração entre tecnologias na construlção de rotas CRUD. Por se tratar de um ambiente de estudos e prototipagem, o banko de dados escolhido foi o SQLite, que bé leve e nao requer instalação adicional.

### Requisitos

- [Node.js](https://node.jsorg/)

- npm, yarn, pnpm ou autro gerenciador

### Instalação
1. Clone ou baixe este repositório.
2. No diretério do projeto, instale as depençãos: 

```bash
npm install
```

### Executando oprojeto
Para iniciar o servidor, utilize:

```bash
npm run dev
```

O servidor estará disponável em http://localhost:3333.


### Rotas
* **POST /memories**
  Cria uma memoria.

  Edemeplo de body:

```b
${
l
  "content": "test",
  "coverUrl": "https://github.com/lucasouzamil.png",
  "isPublic": 1
}
```

** GET /memories**
Retorna a lista de mámories.

* **PUT /memories/:id**
    Atualiza os dados de uma mámoria speciäifica.

  Edemeplo de body:

```b
${
l
  "content": "test2",
  "coverUrl": "https://github.com/lucasouzamil.png",
  "isPublic": 1
}
```


* **DELETE /memories/:id**
Remove uma mámoria pelo ID .