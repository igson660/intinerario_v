# Guia de Instalação — Bolsa

## 📥 Após Descarregar

Quando descarrega o projecto do Manus WebDev, recebe um ficheiro ZIP com toda a aplicação. Siga estes passos para executar localmente.

### Passo 1: Extrair o Ficheiro

```bash
unzip bolsa-estudantil-dashboard.zip
cd bolsa-estudantil-dashboard
```

### Passo 2: Instalar Node.js e Yarn (se necessário)

**macOS (com Homebrew)**:

```bash
brew install node yarn
```

**Windows**:

- Descarregar Node.js de https://nodejs.org/ (versão LTS)
- Instalar Yarn: `npm install -g yarn`

**Linux (Ubuntu/Debian)**:

```bash
sudo apt-get update
sudo apt-get install nodejs npm
npm install -g yarn
```

### Passo 3: Instalar Dependências

```bash
yarn install
```

Isto vai descarregar todas as bibliotecas necessárias (Next.js, React, Tailwind, etc.).

### Passo 4: Executar em Desenvolvimento

```bash
yarn dev
```

Abra o navegador em **http://localhost:3000**

### Passo 5: Compilar para Produção (Opcional)

```bash
yarn build
```

Isto gera ficheiros HTML estáticos em `out/` que podem ser hospedados em qualquer servidor web.

## 📋 Ficheiros Incluídos

Quando faz download, o ficheiro ZIP deve conter:

```
✓ app/                    — Páginas e rotas
✓ components/             — Componentes React
✓ contexts/               — Contexto global
✓ lib/                    — Utilitários
✓ data/                   — Base de dados (3.826 grupos, exercícios 2023–2026)
✓ scripts/                — Scripts de validação por exercício e no consolidado
✓ package.json            — Dependências
✓ next.config.ts          — Configuração Next.js
✓ tailwind.config.ts      — Configuração Tailwind
✓ tsconfig.json           — Configuração TypeScript
✓ .gitignore              — Ficheiros a ignorar no Git
✓ README.md               — Documentação
✓ INSTALL.md              — Este ficheiro
```

## ⚠️ Se Faltar Algum Ficheiro

Se o download não incluir algum ficheiro de configuração, pode recriá-lo. Os ficheiros críticos são:

- `package.json` — Dependências do projecto
- `next.config.ts` — Configuração do Next.js
- `tailwind.config.ts` — Configuração do Tailwind CSS
- `tsconfig.json` — Configuração do TypeScript
- `postcss.config.mjs` — Configuração do PostCSS

Contacte o suporte se precisar de ajuda a reconstruir estes ficheiros.

## 🔧 Troubleshooting

### Erro: "command not found: yarn"

Instale o Yarn globalmente:

```bash
npm install -g yarn
```

### Erro: "Cannot find module 'next'"

Execute:

```bash
yarn install
```

### Porta 3000 já está em uso

Use uma porta diferente:

```bash
PORT=3001 yarn dev
```

### Build falha com erro TypeScript

Verifique a versão do Node:

```bash
node --version  # Deve ser v18+
```

### Limpar cache e reinstalar

```bash
rm -rf node_modules .next .next-build
yarn install
yarn dev
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique se tem Node.js 18+ instalado
2. Limpe o cache: `rm -rf node_modules .next && yarn install`
3. Reinicie o servidor: `yarn dev`

---

**Última actualização**: 20/07/2026
