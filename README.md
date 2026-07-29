# Bolsa Clara — Dashboard BI de Assistência Estudantil

Aplicação web interactiva para análise de pagamentos de bolsas de assistência estudantil, construída com **Next.js 15**, **TypeScript**, **React 19** e **Tailwind CSS 4**.

## 📋 Características

- **Dashboard BI**: 9 gráficos interactivos com Recharts
- **Pesquisa Avançada**: Filtros globais (beneficiário, ano, curso, conta, despesa, fonte, faixa de valor)
- **Perfis Individuais**: 399 páginas de beneficiários com histórico completo de pagamentos
- **Importação de Dados**: Suporte a texto SICAF com parsing local no navegador
- **Exportação Estática**: 403 páginas HTML pré-renderizadas para hospedagem simples
- **Responsivo**: Design adaptado para desktop, tablet e mobile
- **Tipagem Completa**: TypeScript com validação de tipos em toda a aplicação

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- Yarn 1.22+

### Instalação

```bash
# Clonar ou extrair o projecto
cd bolsa-estudantil-dashboard

# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn dev

# Abrir http://localhost:3000 no navegador
```

### Build para Produção

```bash
# Compilar e exportar páginas estáticas
yarn build

# Servir localmente (requer 'serve' instalado globalmente)
yarn start
```

## 📁 Estrutura do Projecto

```
bolsa-estudantil-dashboard/
├── app/                      # App Router (Next.js 15)
│   ├── page.tsx             # Página inicial (redirecionamento)
│   ├── layout.tsx           # Layout raiz
│   ├── globals.css          # Estilos globais
│   ├── dashboard/page.tsx   # Dashboard BI
│   ├── pesquisa/page.tsx    # Pesquisa de beneficiários
│   └── beneficiario/[cpf]/page.tsx  # Perfil individual
├── components/              # Componentes React reutilizáveis
│   ├── Sidebar.tsx          # Navegação lateral
│   ├── Navbar.tsx           # Barra superior
│   ├── Filters.tsx          # Filtros globais
│   ├── DashboardCharts.tsx  # Gráficos interactivos
│   ├── BeneficiaryDetail.tsx # Detalhes do beneficiário
│   └── ...
├── contexts/                # React Contexts
│   └── DataContext.tsx      # Contexto global de dados
├── lib/                     # Utilitários e lógica
│   ├── types.ts             # Tipos TypeScript
│   ├── parser.ts            # Parser de texto SICAF
│   ├── filters.ts           # Lógica de filtros
│   ├── charts.ts            # Agregações para gráficos
│   ├── formatters.ts        # Formatadores (moeda, data)
│   └── ...
├── data/                    # Base de dados estática
│   └── base.ts              # 399 beneficiários (SICAF 2023)
├── scripts/                 # Scripts utilitários
│   └── verify-data.mjs      # Validação de integridade
├── package.json             # Dependências e scripts
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind CSS
├── tsconfig.json            # Configuração TypeScript
└── README.md                # Este ficheiro
```

## 🔧 Configuração

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para a aplicação funcionar localmente. Todos os dados são processados no navegador.

### Customização

**Cores e Tema** (`app/globals.css`):
```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  --rubber: oklch(0.577 0.245 27.325);
  /* ... */
}
```

**Tipografia** (`app/layout.tsx`):
```tsx
// Adicionar fontes Google Fonts no <head>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" rel="stylesheet" />
```

## 📊 Dados

A aplicação inclui a base completa do **Relatório SICAF 2023** com:
- **399 beneficiários** únicos
- **399 pagamentos** (um por beneficiário)
- **Total**: R$ 88.610,00
- **11 cursos** distintos
- **Período**: 01/01/2023 a 31/12/2023

### Validação de Dados

```bash
# Executar validação de integridade
node scripts/verify-data.mjs
```

Resultado esperado:
```json
{
  "status": "passou",
  "beneficiarios": 399,
  "pagamentos": 399,
  "cpfsUnicos": 399,
  "totalCalculado": 88610,
  "issues": []
}
```

## 🎨 Design

**Filosofia**: Atlas Cívico — estética editorial-institucional inspirada em cartografia e relatórios financeiros.

**Paleta**:
- Verde-seringueira (primária)
- Azul-tinta (tipografia)
- Marfim (fundo)
- Cinza mineral (acentos)

**Tipografia**:
- Display: Fraunces (serif editorial)
- Corpo: Inter (sans-serif legível)
- Monospace: IBM Plex Mono (dados numéricos)

## 🔍 Funcionalidades Principais

### 1. Dashboard
- Indicadores: Total, Quantidade, Média, Máximo, Mínimo
- Gráficos: Distribuição por curso, timeline mensal, top cursos, etc.
- Atualização em tempo real conforme filtros

### 2. Pesquisa
- Paginação: 10 beneficiários por página
- Filtros: Nome, CPF, curso, valor
- Acesso directo aos perfis individuais

### 3. Perfis
- Histórico completo de pagamentos
- Dados do beneficiário (CPF, curso, processo SEI)
- Navegação entre perfis

### 4. Importação
- Suporte a texto SICAF
- Parsing local (sem envio de dados)
- Validação e feedback de erros
- Reposição da base original

## 📦 Dependências Principais

- **Next.js 15**: Framework React com App Router
- **React 19**: Biblioteca UI
- **TypeScript 5.6**: Tipagem estática
- **Tailwind CSS 4**: Utilitários CSS
- **Recharts 2.15**: Gráficos interactivos
- **Radix UI**: Componentes acessíveis
- **Lucide React**: Ícones

## 🚢 Deploy

### Opção 1: Manus WebDev (Recomendado)
A aplicação é automaticamente publicada a cada checkpoint.

### Opção 2: Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 3: Hospedagem Estática
```bash
# Gerar ficheiros estáticos
yarn build

# Copiar conteúdo de `.next-build` para o servidor web
# (Apache, Nginx, GitHub Pages, etc.)
```

## 🧪 Testes

```bash
# Validação TypeScript
yarn check

# Verificação de dados
node scripts/verify-data.mjs
```

## 📝 Licença

MIT

## 👥 Suporte

Para questões ou sugestões, contacte o desenvolvedor.

---

**Versão**: 1.0.0  
**Data de Geração**: 20/07/2026  
**Fonte de Dados**: SICAF — Relação de Pagamentos por Credor e Data de Baixa (86 páginas)
