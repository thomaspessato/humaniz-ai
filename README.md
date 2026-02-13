# 🟠 Humaniz.ai

**Textos mais humanos para LinkedIn, powered by AI.**

Humaniz.ai transforma rascunhos genéricos em posts autênticos e envolventes para LinkedIn. Usando IA avançada (GPT-4o-mini), o sistema reescreve seu conteúdo mantendo sua voz — com scores de humanização, clareza e engajamento.

## ✨ Features

- **Editor com IA** — Cole seu rascunho e receba 3 versões humanizadas com scores
- **Dashboard completo** — Métricas, posts recentes, ações rápidas
- **Agendamento** — Agende posts para publicação futura
- **Analytics** — Acompanhe impressões, likes, comentários e engagement rate
- **Autenticação** — Registro/login com email e senha (NextAuth)
- **Design profissional** — Interface inspirada em products como Firecrawl, com animações suaves

## 🛠 Tech Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS 4 |
| Banco | PostgreSQL (Neon) |
| ORM | Prisma 6 |
| Auth | NextAuth v5 (beta) |
| IA | OpenAI GPT-4o-mini |
| Deploy | Vercel |

## 🚀 Setup Local

```bash
# Clone o repositório
git clone https://github.com/thomaspessato/humaniz-ai.git
cd humaniz-ai

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais

# Push do schema para o banco
npx prisma db push

# (Opcional) Seed com dados de teste
npm run db:seed

# Inicie o servidor
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura

```
src/
├── app/
│   ├── api/          # Routes de API (auth, register, rewrite, posts)
│   ├── dashboard/    # Rotas protegidas (editor, schedule, analytics)
│   ├── login/        # Página de login
│   ├── register/     # Página de registro
│   └── page.tsx      # Landing page
├── components/
│   ├── landing/      # Componentes da landing (reveal, demo, faq, typing)
│   └── ui/           # Design system (button, input, textarea, sidebar)
├── lib/              # Auth config, AI service, Prisma client, utils
└── middleware.ts      # Route protection
```

## 📄 License

MIT
