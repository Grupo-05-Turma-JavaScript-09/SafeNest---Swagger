<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1n8EUB4j1gHTEYNLvUSuCX6OSBprp01jz" alt="SafeNest Logo" width="400">
  <h1>SAFENEST SEGUROS</h1>
  <p><em>Protegendo seu amanhã, hoje</em></p>
</div>

---

## 1. Visão Geral

**SafeNest** é uma plataforma de gestão de seguros de vida, construída usando NestJS, TypeORM e MySQL. Com ela, é possível gerenciar clientes, apólices, beneficiários e sinistros, garantindo segurança, confiabilidade e escalabilidade.

### 1.1 Sobre o Desenvolvimento
Este projeto foi desenvolvido como parte do **Bootcamp Generation Brasil**, demonstrando a aplicação dos conceitos aprendidos durante o programa de formação em desenvolvimento full-stack.


## 🏠 SAFENEST SEGUROS

1. Visão Geral
SafeNest é uma plataforma de gestão de seguros de vida, construída usando NestJS, TypeORM e MySQL. Com ela, é possível gerenciar clientes, apólices, beneficiários e sinistros, garantindo segurança, confiabilidade e escalabilidade.

1.1 Sobre o Desenvolvimento
Este projeto foi desenvolvido como parte do Bootcamp Generation Brasil, demonstrando a aplicação dos conceitos aprendidos durante o programa de formação em desenvolvimento full-stack.

2. 🛠 Tecnologias Utilizadas
Node.js / TypeScript

NestJS — framework para aplicações escaláveis do lado do servidor

TypeORM — ORM para trabalhar com banco relacional

MySQL — banco de dados relacional

bcryptjs — para hash e verificação de senhas, garantindo segurança dos usuários

class-validator / class-transformer — validação de dados de entrada e transformação de objetos

Outras configurações de tooling: ESLint, Prettier, tsconfig, etc.

## 3. 📁 Estrutura de Pastas
````
safenest/
├── 📁 src/
│   ├── 📁 modules/
│   │   ├── 📁 apolice/
│   │   │   ├── apolice.controller.ts
│   │   │   ├── apolice.entity.ts
│   │   │   ├── apolice.service.ts
│   │   │   └── apolice.module.ts
│   │   ├── 📁 categoria/
│   │   │   ├── categoria.controller.ts
│   │   │   ├── categoria.entity.ts
│   │   │   ├── categoria.service.ts
│   │   │   └── categoria.module.ts
│   │   └── 📁 usuario/
│   │       ├── usuario.controller.ts
│   │       ├── usuario.entity.ts
│   │       ├── usuario.service.ts
│   │       └── usuario.module.ts
│   ├── app.module.ts
│   └── main.ts
├── 📁 dist/
├── 📁 node_modules/
├── 📁 test/
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
````

Descrição da estrutura:

src/modules/ - Módulos da aplicação organizados por funcionalidade

src/modules/apolice/ - Tudo relacionado a apólices de seguro

src/modules/categoria/ - Categorização dos seguros

src/modules/usuario/ - Gestão de usuários do sistema

src/app.module.ts - Módulo raiz da aplicação

src/main.ts - Arquivo de inicialização

configurações/ - Arquivos de configuração do projeto


## 4. 🚀 Instalação e Execução

Pré-requisitos
Node.js instalado (versão 16 ou superior)

MySQL configurado (com banco de dados disponível)

Passos
Clonar o repositório

bash
git clone https://github.com/Grupo-05-Turma-JavaScript-09/SafeNest.git
Entrar no diretório do projeto

bash
cd SafeNest
Instalar dependências

bash
npm install
Configurar variáveis de ambiente

bash
# Criar arquivo .env na raiz do projeto
DATABASE_HOST=localhost
DATABASE_PORT=4000
DATABASE_USER=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=safenest
Para rodar em modo de desenvolvimento

bash
npm run start:dev
Para rodar produção





## 5. 📡 Endpoints

- Módulo Categorias
Método	Endpoint
Descrição
GET	/categorias	Retorna todas as categorias cadastradas
GET	/categorias/:id	Retorna categoria por ID
POST	/categorias	Cria nova categoria
PUT	/categorias/:id	Atualiza categoria por ID
DELETE	/categorias/:id	Remove categoria por ID

- Módulo Usuários
Método	Endpoint
Descrição
POST	/usuarios	Cria um novo usuário com os dados enviados
GET	/usuarios	Retorna todos os usuários cadastrados
GET	/usuarios/:id	Retorna um usuário específico pelo ID
PUT	/usuarios	Atualiza um usuário existente com os dados

- Módulo Apólices
Método	Endpoint
Descrição
GET	/apolices	Retorna todas as apólices
GET	/apolices/:id	Retorna apólice por ID
POST	/apolices	Cria nova apólice
PUT	/apolices	Atualiza apólice
PUT	/apolices/:id/desconto	Aplica desconto a apólice por ID
DELETE	/apolices/:id	Remove apólice por ID

## 6. 👥 Contribuição

Como contribuir:
Faça um fork do repositório

Crie uma branch: feature/nome-da-feature

Crie commits claros e informativos

Abra um pull request descrevendo as alterações

Adicione testes e documentação quando possível

## Equipe de Desenvolvimento:

- Adrya Giuly -	CRUD de Categorias, merge do projeto e testes no Insomnia
- Ayron Santana	- Entity e módulo da apólice
- Emily Mangas -Usuario controller / usuario service
- Eric Silva - Controller e Service da apólice
- Flavio Serra - Relacionamento entre classes (Categoria) e documentação
- Paula Melo - Estrutura do projeto, usuario entity/module + bcrypt, logo
- Sthefany Mattos -	Scrum, identidade visual, apresentação

## 7. 🙏 Agradecimentos
Agradecimentos especiais aos instrutores do Bootcamp Generation Brasil:

Thiago - Orientação técnica e suporte

Índio - Ensino e mentoria

---
"Agradecemos à Generation Brasil por esta jornada transformadora!" 🚀
