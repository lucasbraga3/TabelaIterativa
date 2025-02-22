# TesteHexagon - Aplicação Full Stack

Uma aplicação full stack modular desenvolvida com tecnologias modernas para oferecer flexibilidade, performance e facilidade de uso. Ideal para testes, customizações e estudos de arquitetura.

---

## ✨ Tecnologias Utilizadas

### Banco de Dados
- **PostgreSQL (PSQL)**: Escolhido pela facilidade de configuração via Docker.  
- **Compatibilidade**: Funciona com qualquer banco relacional (MySQL, SQL Server, etc.) com ajustes mínimos.

### Backend
- **ASP.NET Core**: API RESTful robusta e escalável.  
- **Swagger/OpenAPI**: Documentação interativa e testes de endpoints em tempo real.  
- **Entity Framework Core**: ORM para abstração do banco de dados e migrações.  
- **Arquitetura**: Separação clara entre `Models` (entidades) e `Controllers` (lógica de negócio).

### Frontend
- **React + Vite**: Ambiente de desenvolvimento veloz.  
- **Tailwind CSS + shadcn**: Estilização ágil com componentes UI prontos e responsivos.  
- **Axios**: Conexão eficiente com a API backend.  

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose
- .NET SDK 6.0+ (backend)
- Node.js 18+ e npm (frontend)

### Passo a Passo

1. **Configurar Banco de Dados (Docker)**  
   No diretório raiz do projeto, execute:  
        ```bash
        docker-compose up --build
   O banco de dados PostgreSQL será iniciado na porta 5431.
2. **Iniciar o Backend**  
   Navegue até `TesteHexagon-back/TesteHexagon` e execute:  
        ```bash
        dotnet run
    A API RESTful será iniciada na porta 5130.
3. **Frontend (React)**  
   Navegue até `TesteHexagon-front` , instale as dependências e inicie:  
        ```bash
        npm install
        npm run dev
   O frontend será iniciado na porta 5173.