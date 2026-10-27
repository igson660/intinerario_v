# Bolsa Clara — Dashboard BI de Assistência Estudantil

Aplicação web interativa para análise de pagamentos de bolsas de assistência estudantil, construída com **Next.js 15**, **TypeScript**, **React 19** e **Tailwind CSS 3**.

## 📋 Características

- **Dashboard BI**: 9 gráficos interactivos com Recharts
- **Camada de Pactuação**: seleção independente para 2023, 2024, 2025 e 2026
- **Pesquisa Avançada**: filtros de beneficiário, ano de pagamento, curso, conta, despesa, fonte e faixa de valor
- **Perfis Individuais**: consulta de grupos beneficiário–processo e histórico completo de pagamentos
- **Importação de Dados**: Suporte a texto SICAF com parsing local no navegador
- **Exportação Estática**: páginas HTML pré-renderizadas para hospedagem simples
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
│   ├── pesquisa/page.tsx    # Pesquisa de grupos
│   └── beneficiario/page.tsx # Perfil por query string, inclusive após importação
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
│   ├── pactuacoes.ts        # Validação de anos de pactuação
│   ├── charts.ts            # Agregações para gráficos
│   ├── formatters.ts        # Formatadores (moeda, data)
│   └── ...
├── data/                    # Bases organizadas por camada
│   ├── base.ts              # 3.826 grupos da Pactuação 2023 (pagamentos dos exercícios 2023–2026)
│   └── pactuacoes.ts        # Mapa dos conjuntos disponíveis por ano de pactuação
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

Nenhuma variável de ambiente é necessária para a aplicação funcionar localmente. Os dados são processados no navegador e as importações substituem apenas a pactuação selecionada durante a sessão atual.

> **Privacidade:** o processamento no navegador não torna os dados privados. A base-fonte contém dados pessoais e financeiros, e uma exportação estática disponibiliza aos visitantes os arquivos e dados incluídos no pacote. Não publique o dashboard em hospedagem pública sem autorização e sem uma camada adequada de autenticação e controle de acesso.

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

O dashboard separa **ano da Pactuação** de **ano de pagamento**. Todos os dados que já existiam foram associados à **Pactuação 2023**; eles incluem pagamentos nos exercícios financeiros de 2023 a 2026. As Pactuações 2024, 2025 e 2026 estão criadas, mas começam sem dados.

A base atual contém os **Relatórios SICAF do Itinerário Formativo 2023** com:
- **3.826 grupos beneficiário/processo**
- **6.203 pagamentos**
- **Total**: R$ 3.479.800,00
- **Período**: 26/12/2023 a 20/07/2026
- **1.133 páginas de origem**: relatórios por ano de pagamento, não por ano de Pactuação

O seletor **Pactuação** na barra superior troca o conjunto de dados inteiro. O filtro **Ano de pagamento** dentro do dashboard filtra as datas dos pagamentos da pactuação ativa; não muda nem infere o ano da pactuação. Por exemplo, pagamentos de 2025 podem pertencer à Pactuação 2023.

### Validação de Dados

```bash
# Executar validação de integridade
yarn verify:data
```

Resultado esperado:
```json
{
  "status": "passou",
  "grupos": 3826,
  "pagamentos": 6203,
  "identificadoresDeRotaUnicos": 3826,
  "notasDePagamentoUnicas": 6203,
  "totalCalculado": 3479800,
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
- **Tailwind CSS 3.4**: Utilitários CSS
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
yarn verify:data
```

## 📝 Licença

MIT

## 👥 Suporte

Para questões ou sugestões, contacte o desenvolvedor.

---

**Versão**: 1.0.0  
**Data de Geração**: 20/07/2026  
**Fonte de Dados**: SICAF — Relação de Pagamentos por Credor e Data de Baixa (1.133 páginas; Pactuação 2023, pagamentos nos exercícios 2023–2026)
