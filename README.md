# FellipeBet — Plataforma de Apostas Esportivas

Bem-vindo ao projeto **FellipeBet**!  
Este repositório contém o código-fonte da aplicação de visualização e organização de apostas esportivas, desenvolvida com **Next.js 14**, **React 19**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

🔗 Acesse a versão em produção: [https://gdm-tech.vercel.app](https://gdm-tech.vercel.app)

📦 Repositório oficial: [github.com/fellipefontanez/gdm-tech](https://github.com/fellipefontanez/gdm-tech)

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**
- **TypeScript**
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **MongoDB (com Docker)**
- **NextAuth.js** (autenticação)

---

## 💻 Como rodar o projeto localmente

### ✅ Pré-requisitos

Certifique-se de que você tenha instalado em sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### ⚙️ Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/fellipefontanez/gdm-tech.git
   cd gdm-tech
   ```

2. Inicie o MongoDB com Docker:

   ```bash
   docker compose -f docker-compose.dev.yml up -d
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Crie um .env com base no arquivo .env.example

5. Inicie a aplicação Next.js:
   ```bash
   npm run dev
   ```

---

## 🗂️ Estrutura do Projeto

```
gdm-tech/
├── components/         # Componentes reutilizáveis
├── pages/              # Rotas da aplicação (Next.js)
├── public/             # Arquivos estáticos
├── styles/             # Estilos globais
├── lib/                # Conexão com MongoDB, autenticação etc.
├── docker-compose.dev.yml
└── ...
```

---

## 🧪 Testes

_Em breve:_ O projeto terá testes unitários com **Jest** e **React Testing Library**.

---

## 📄 Licença

Este projeto é de uso educacional e pessoal.  
Desenvolvido por [Fellipe Fontanez](https://www.linkedin.com/in/fellipefontanez/).
