# 📰 ig.news

Aplicação para **inscrição em newsletter com pagamento via Stripe**, desenvolvida durante o **Ignite (Módulo 03)** da Rocketseat.  
O projeto tem como objetivo praticar conceitos modernos de **Next.js** como **SSR**, **SSG**, consumo de APIs externas e integração com serviços como **Stripe**, **NextAuth**, **FaunaDB** e **Prismic CMS**.  

---

## 📖 Sobre o Projeto

O **ig.news** é uma aplicação web para assinatura de conteúdo, onde o usuário pode:  
- Autenticar-se via **GitHub** usando **NextAuth**;  
- Realizar a inscrição através de pagamentos com **Stripe**;  
- Ter suas informações persistidas em **FaunaDB**;  
- Acessar conteúdos cadastrados no **Prismic CMS**;  
- Visualizar posts renderizados de forma otimizada com **SSR** e **SSG**.  

Este projeto foi desenvolvido como prática durante as aulas do **Ignite (Módulo 03)** da Rocketseat.  

---

## 🚀 Tecnologias

As principais tecnologias utilizadas foram:  

- **ReactJS**  
- **Next.js**  
- **TypeScript**  
- **SASS** (estilização)  
- **NextAuth** (autenticação com GitHub)  
- **Stripe** (sistema de pagamento)  
- **FaunaDB** (persistência dos dados)  
- **Prismic CMS** (gerenciamento de conteúdo)  

---

## ⚙️ Configurações Necessárias

### 📌 Requisitos
Certifique-se de ter instalado em sua máquina:  
- **Git**  
- **Yarn**  
- **Stripe CLI**  

### 🔑 Configuração de serviços externos
É necessário criar conta e configurar os seguintes serviços:  
- [Stripe](https://stripe.com/) – para gerenciamento de pagamentos.  
- [FaunaDB](https://fauna.com/) – banco de dados serverless para persistência.  
- [Prismic CMS](https://prismic.io/) – para gerenciamento e publicação dos posts.  

---

## 🛠️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ignews.git

# Acesse a pasta do projeto
cd ignews

# Instale as dependências
yarn install

# Configure as variáveis de ambiente (.env.local)
# Exemplos:
# STRIPE_API_KEY=
# NEXTAUTH_SECRET=
# GITHUB_CLIENT_ID=
# GITHUB_CLIENT_SECRET=
# FAUNADB_KEY=
# PRISMIC_ENDPOINT=
# PRISMIC_ACCESS_TOKEN=

# Execute o servidor de desenvolvimento
yarn dev
